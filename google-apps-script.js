// Google Apps Script code to handle form submissions
// This file should be created in Google Apps Script (script.google.com)

function doGet(e) {
  try {
    console.log('doGet called with parameters:', e.parameter);
    
    // Get the spreadsheet by ID
    const SPREADSHEET_ID = '1a89XjW5B6GQHl_aorqND8ScQuBkYTa0NdgkoLv0Pf7Q';
    console.log('Attempting to open spreadsheet with ID:', SPREADSHEET_ID);
    
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('Spreadsheet opened successfully');
    
    // Get or create the sheet
    let sheet = spreadsheet.getSheetByName('Email Subscribers');
    if (!sheet) {
      console.log('Sheet not found, creating new sheet...');
      sheet = spreadsheet.insertSheet('Email Subscribers');
      
      // Add headers if this is a new sheet
      sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Email', 'Source', 'Status']]);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 4).setBackground('#4285f4');
      sheet.getRange(1, 1, 1, 4).setFontColor('#ffffff');
      console.log('New sheet created with headers');
    } else {
      console.log('Existing sheet found');
    }
    
    // Get form data from URL parameters
    const email = e.parameter.email;
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const source = e.parameter.source || 'Website';
    
    console.log('Form data received:', { email, timestamp, source });
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      console.log('Invalid email provided:', email);
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Invalid email address'
        }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        });
    }
    
    // Check if email already exists
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    
    console.log('Checking for duplicate emails...');
    // Skip header row and check for existing email
    for (let i = 1; i < values.length; i++) {
      if (values[i][1] === email) {
        console.log('Duplicate email found:', email);
        return ContentService
          .createTextOutput(JSON.stringify({
            success: false,
            message: 'Email already subscribed'
          }))
          .setMimeType(ContentService.MimeType.JSON)
          .setHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          });
      }
    }
    
    // Add new row with the data
    const newRow = [
      new Date(timestamp),
      email,
      source,
      'Active'
    ];
    
    console.log('Adding new row:', newRow);
    sheet.appendRow(newRow);
    
    // Format the new row
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 4);
    
    console.log('Email successfully added to sheet');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Email successfully added to newsletter'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    console.error('Error in doGet:', error);
    console.error('Error stack:', error.stack);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Internal server error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

function doPost(e) {
  console.log('doPost called, redirecting to doGet');
  // Redirect POST requests to GET handler
  return doGet(e);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Test function to verify the script works
function testScript() {
  console.log('Running test script...');
  const testData = {
    parameter: {
      email: 'test@example.com',
      timestamp: new Date().toISOString(),
      source: 'Test'
    }
  };
  
  const result = doGet(testData);
  console.log('Test result:', result.getContent());
}

// Function to manually test with your actual spreadsheet
function testWithRealData() {
  console.log('Running real data test...');
  const testData = {
    parameter: {
      email: 'testuser@gmail.com',
      timestamp: new Date().toISOString(),
      source: 'Manual Test'
    }
  };
  
  try {
    const result = doGet(testData);
    console.log('Test result:', result.getContent());
  } catch (error) {
    console.error('Test error:', error);
    console.error('Error details:', error.toString());
  }
}

// Function to check spreadsheet access
function checkSpreadsheetAccess() {
  try {
    const SPREADSHEET_ID = '1a89XjW5B6GQHl_aorqND8ScQuBkYTa0NdgkoLv0Pf7Q';
    console.log('Checking access to spreadsheet:', SPREADSHEET_ID);
    
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    console.log('Spreadsheet name:', spreadsheet.getName());
    console.log('Spreadsheet URL:', spreadsheet.getUrl());
    
    const sheets = spreadsheet.getSheets();
    console.log('Existing sheets:', sheets.map(sheet => sheet.getName()));
    
    return 'Access successful';
  } catch (error) {
    console.error('Access error:', error);
    return 'Access failed: ' + error.toString();
  }
}