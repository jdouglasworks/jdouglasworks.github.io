import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * Verifies that the portfolio's social media links (LinkedIn, GitHub) are
 * present, accessible, and point to the correct destinations.
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    await page.goto('/')

    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)

    const googlePlusLabel = page.locator('footer a[aria-label="Google Plus"]')
    await expect(googlePlusLabel).toHaveCount(0)
  })

  test('should display active social media links', async ({ page }) => {
    await page.goto('/')

    // Verify LinkedIn link is present
    const linkedInLink = page.locator(`footer a[href*="${testConfig.socialLinks.linkedin.url}"]`)
    await expect(linkedInLink).toBeVisible()
    await expect(linkedInLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.linkedin.ariaLabel
    )

    // Verify GitHub link is present
    const githubLink = page.locator(`footer a[href*="${testConfig.socialLinks.github.url}"]`)
    await expect(githubLink).toBeVisible()
    await expect(githubLink).toHaveAttribute('aria-label', testConfig.socialLinks.github.ariaLabel)
  })

  test('should have exactly 2 social media icons', async ({ page }) => {
    await page.goto('/')

    const socialMediaLinks = page.locator(
      `footer a[aria-label="${testConfig.socialLinks.linkedin.ariaLabel}"], footer a[aria-label="${testConfig.socialLinks.github.ariaLabel}"]`
    )
    await expect(socialMediaLinks).toHaveCount(2)
  })
})
