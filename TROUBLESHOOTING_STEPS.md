# Google Sheets Integration Troubleshooting

## Step 1: Check Spreadsheet Access

1. Go to [Google Apps Script](https://script.google.com)
2. Open your project
3. In the script editor, run the `checkSpreadsheetAccess()` function
4. Check the execution log (View → Logs) for any errors

## Step 2: Test the Script Manually

1. Run the `testWithRealData()` function
2. Check the execution log for detailed error messages
3. If successful, check your Google Sheet for the test email

## Step 3: Check Permissions

Make sure your Google Apps Script has permission to:
- Access Google Sheets
- Access external URLs (for web app deployment)

## Step 4: Verify Deployment Settings

1. Click "Deploy" → "Manage deployments"
2. Make sure the deployment is set to:
   - **Type**: Web app
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
3. Copy the correct Web App URL

## Step 5: Test from Website

1. Open browser developer tools (F12)
2. Go to the Console tab
3. Try subscribing with an email
4. Check for any JavaScript errors or network issues

## Common Issues and Solutions

### Issue: "Script function not found"
**Solution**: Make sure you've saved the script and deployed it as a web app

### Issue: "Permission denied"
**Solution**: Run the test function first to grant permissions

### Issue: "Spreadsheet not found"
**Solution**: 
- Check that the spreadsheet ID is correct
- Make sure you have edit access to the spreadsheet
- Verify the spreadsheet exists and is not deleted

### Issue: "Cannot read properties of undefined"
**Solution**: 
- Check that the web app URL is correct
- Make sure you're sending data as URL parameters
- Verify the deployment is active

## Debug Steps

1. **Check the Google Apps Script logs**:
   - Go to Google Apps Script
   - Click "Executions" in the left sidebar
   - Look for recent executions and any error messages

2. **Test the URL directly**:
   ```
   https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?email=test@example.com&source=Direct%20Test
   ```

3. **Check browser network tab**:
   - Open developer tools
   - Go to Network tab
   - Try submitting the form
   - Check if the request is being sent and what response you get

## Expected Behavior

When working correctly:
1. The script should create a new sheet called "Email Subscribers" if it doesn't exist
2. The sheet should have headers: Timestamp, Email, Source, Status
3. New emails should be added as new rows
4. Duplicate emails should be rejected
5. The website should show success/error messages