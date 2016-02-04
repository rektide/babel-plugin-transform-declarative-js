# Babel Plugin Transform Declarative JS

Typically JS modules require explicitly authoring the exports of a module. Declarative JS enables a new form of module authoring where all statements in the script are exported by default, as members in an array.

Stylistically use of Declarative JS resembles authoring line delimited JSON, however the author is not restrained to object notation and can instead use the full powers of JS in generating sequence values.

This was created to make blogging in JS easier. 

# Basic example

For the following Declarative JS:

```
{example: "data"}
"4"+2
var months = 1000*60*60*24*30.4375
(new Date()).getTime()/months
```

One would get a module, a module that exports a single function which when executed would return `[{example: "data"}, "42", 46.092]`
