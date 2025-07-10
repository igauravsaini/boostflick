# Google Sheets Integration Setup Instructions

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the content from `google-apps-script.js`
4. Save the project with a name like "BoostFlick Email Collector"

## Step 2: Test the Script First

1. In the Google Apps Script editor, run the `testWithRealData()` function
2. This will prompt you to grant permissions
3. Click "Review permissions" → Choose your account → "Advanced" → "Go to [Project Name] (unsafe)" → "Allow"
4. Check your Google Sheet to see if a test email was added

## Step 3: Deploy as Web App

1. In Google Apps Script, click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set the following configuration:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click "Deploy"
5. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Update the Frontend Code

1. In `src/components/Contact.tsx`, find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzq-xIvHy0eliQEk6Z9y-k3J7-hX7De-TK0dlfMPttaeieL-vgcOEdnRWZxlSMTqKjr/exec';
   ```
2. Replace the entire URL with your actual deployed web app URL

## Step 5: Test the Integration

1. Go to your website
2. Enter an email in the newsletter subscription form
3. Click "Subscribe Now"
4. Check your Google Sheet to see if the email was added

## What This Setup Does

The integration now:
- **Uses GET requests** with URL parameters (more reliable than POST for Google Apps Script)
- **Handles CORS properly** with appropriate headers
- **Creates the sheet automatically** if it doesn't exist
- **Prevents duplicate emails** 
- **Validates email format** both client and server side
- **Provides proper error handling** and user feedback

## Google Sheet Structure

The script will automatically create a sheet named "Email Subscribers" with these columns:
- **Timestamp**: When the subscription occurred (formatted as date/time)
- **Email**: The subscriber's email address
- **Source**: Where the subscription came from (e.g., "BoostFlick Website")
- **Status**: Subscription status (Active by default)

## Testing the Google Apps Script

You can test the script directly in the Google Apps Script editor:

1. Run the `testWithRealData()` function
2. Check the execution log for any errors
3. Verify that a test email appears in your Google Sheet

## Troubleshooting

### If you still get permission errors:
1. Make sure you're logged into the same Google account that owns the spreadsheet
2. Try running the test function first before deploying
3. Check that the spreadsheet ID in the script matches your actual sheet

### If emails aren't appearing:
1. Check the browser console for any JavaScript errors
2. Verify the Web App URL is correct in the Contact.tsx file
3. Make sure the deployment is set to "Anyone" access

### Common Issues Fixed:
- ✅ CORS headers properly configured
- ✅ GET method with URL parameters
- ✅ Proper error handling and responses
- ✅ Automatic sheet creation
- ✅ Duplicate email prevention
- ✅ Email validation

The integration should now work smoothly with proper error handling and user feedback!