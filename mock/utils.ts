/**
 * * jwt token
 * * Bearer + token
 * ! 认证方案: Bearer
 */
export function resolveToken(authorization) {
  const reqTokenSplit = authorization.split(' ')
  if (reqTokenSplit.length === 2) {
    return reqTokenSplit[1]
  }
  return ''
}
