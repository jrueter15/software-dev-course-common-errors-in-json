/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/

/* Answers
JSON doesn't use const, since JSON is just data and not variables. CheckInDate didn't have a comma after it, which separates keys and is required in JSON. Name in the first object of "guests" array didn't have quotations around it, which is required for keys in JSON. Second object in "guests" array was of undefined value, which isn't allowed in JSON. JSON uses null instead due to being understood by most or all programming languages. The roomDetails, amentiies array had a trailing comma after parking, which isn't allowed in JSON.
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I used codebeautify which parsed each line to validate the JSON code.

2️⃣ How did you confirm that your corrected JSON file was valid?

Codebeautify provided a continuous error message until I corrected all the issues into a valid JSON.

3️⃣ Which errors were the most difficult to spot? Why?

Const made it look like normal code, but that is for JS not JSON. JSON is purely data, so there's no variables, like const. Undefined also looked correct, however JSON uses null not undefined.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

Common housekeeping for JSON files should include matching braces and brackets, using proper quotations, and proper commas. I found codebeautify to be useful as it immediately highlighted the next syntax issue and provided details to correct it.

*/
