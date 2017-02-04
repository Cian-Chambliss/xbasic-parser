# xbasic-parser

Node module for xbasic parsing, creates a symbol tree representing the xbasic script.

## Example

```
var code = '\
function fullname as c(fname as c,lname as c)\r\n\
     fullname = fname+" "+lname\r\n\
end function\r\n\
\r\n\
dim name as c\r\n\
name = fullname("john","public")\r\n\
';
var xbp = require("xbasic-parser");
console.log(JSON.stringify(xbp.parse(code), null, "  ")); 
```

## Produces 

```
{
  "error": "Lines :7",
  "commands": [
    {
      "type": "function",
      "variable": "fullname",
      "returns": "c",
      "arguments": [
        {
          "name": "fname",
          "type": "c"
        },
        {
          "name": "lname",
          "type": "c"
        }
      ],
      "lineNumber": 0
    },
    {
      "type": "expr",
      "expr": {
        "type": ":=",
        "operator": [
          {
            "identifier": "fullname"
          },
          {
            "type": "+",
            "operator": [
              {
                "identifier": "fname"
              },
              {
                "type": "+",
                "operator": [
                  {
                    "string": "\" \""
                  },
                  {
                    "identifier": "lname"
                  }
                ]
              }
            ]
          }
        ]
      },
      "lineNumber": 1
    },
    {
      "type": "end_function",
      "lineNumber": 2
    },
    {
      "type": "dim",
      "variable": "name",
      "returns": "c",
      "lineNumber": 4
    },
    {
      "type": "expr",
      "expr": {
        "type": ":=",
        "operator": [
          {
            "identifier": "name"
          },
          {
            "function": "fullname",
            "parameters": [
              {
                "string": "\"john\""
              },
              {
                "string": "\"public\""
              }
            ]
          }
        ]
      },
      "lineNumber": 5
    }
  ]
}
```