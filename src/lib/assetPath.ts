/**
 * Helper function to construct asset paths that work with GitHub Pages basePath.
 *
 * Deployed to jdouglasworks.github.io (user site, no basePath).
 * Set NEXT_PUBLIC_BASE_PATH if ever moving to a subpath deploy.
 *
 * @param path - The asset path starting with /
 * @returns The full asset path including basePath if configured
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}
