# Security Rotation Checklist - React2Shell Remediation

## Critical: Rotate All Secrets Immediately

Your application was vulnerable to React2Shell (CVE-2025-55182) and may have been compromised. **All secrets must be rotated immediately.**

## Secrets Identified in Codebase

### 1. OpenAI API Key
- **Location**: `app/api/message/route.js` (line 16)
- **Environment Variable**: `OPENAI_API_KEY`
- **Action Required**:
  1. Log into [OpenAI Platform](https://platform.openai.com/api-keys)
  2. Revoke the current API key
  3. Generate a new API key
  4. Update in all locations:
     - Local `.env.local` file
     - Deployment platform environment variables (Vercel/Netlify/etc.)
     - CI/CD pipeline secrets
     - Any other environment configuration files

## Additional Secrets to Check

### Environment Variables to Rotate
Check for these in your deployment platform and local files:
- `OPENAI_API_KEY` (confirmed in use)
- Any database connection strings
- Authentication tokens
- Session secrets
- Third-party API keys
- OAuth client secrets

### Locations to Update
- [ ] `.env.local` (local development)
- [ ] `.env.production` (if exists)
- [ ] Deployment platform dashboard (Vercel/Netlify/AWS/etc.)
- [ ] GitHub Secrets (Settings → Secrets and variables → Actions)
- [ ] CI/CD pipeline configuration
- [ ] Docker environment files (if applicable)
- [ ] Kubernetes secrets (if applicable)

## Preview Links Audit

### Action Required
1. Review all shareable preview/deployment links from the vulnerable period
2. Check deployment platform for:
   - Preview deployments
   - Branch previews
   - Pull request previews
3. Revoke access to any suspicious or unauthorized previews
4. Document who had access during the vulnerable period (if applicable)

## Deployment Protection

### Enable Protection
- [ ] Configure deployment protection on non-production environments
- [ ] Set up branch protection rules in GitHub (if using GitHub)
- [ ] Review deployment platform security settings
- [ ] Enable deployment approval workflows for production

## Post-Rotation Verification

After rotating secrets:
- [ ] Test the application locally with new secrets
- [ ] Verify API calls work (e.g., OpenAI chat functionality)
- [ ] Deploy to staging and verify
- [ ] Monitor for any authentication errors
- [ ] Check application logs for unauthorized access attempts

## Timeline

**IMMEDIATE**: Rotate secrets before deploying the patched version
**URGENT**: Complete within 24 hours
**CRITICAL**: Do not delay - assume your application was compromised

---

**Note**: This checklist was generated as part of the React2Shell security remediation. Next.js has been upgraded to 15.5.7 (patched version).

