# Introduction to Templater

Templater is a template language that lets you insert variables and functions results into your notes. It will also let you execute JavaScript code manipulating those variables and functions.

With Templater, you will be able to create powerful templates to automate manual tasks.

---

# Quick Example

## Template Syntax

The following template file, that is using Templater syntax:

```
---
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

# <% tp.file.title %>

<% tp.web.daily_quote() %>
```

## Example Output

Will produce the following result when inserted:

```
---
creation date: 2021-01-07 17:20
modification date: Thursday 7th January 2021 17:20:43
---

<< [[2021-04-08]] | [[2021-04-10]] >>

# Test Test

> Do the best you can until you know better. Then when you know better, do better.
> &mdash; <cite>Maya Angelou</cite>
```

---

# Understanding Templater

## Key Terms

* A **template** is a file that contains **commands**.
* A text snippet that starts with an opening tag `<%`, ends with a closing tag `%>` is what we will call a **command**.
* A **function** is an object that we can invoke inside a **command** that returns a value (the replacement string)

## Types of Functions

There are two types of functions you can use:

* Internal functions. They are **predefined** functions that are built within the plugin. As an example, `tp.date.now` is an internal function that will return the current date.
* User functions. Users can define their own functions. They are either system command or user scripts.

## Basic Example

The following template contains 2 commands, calling 2 different internal functions:

```
Yesterday: <% tp.date.yesterday("YYYY-MM-DD") %>
Tomorrow: <% tp.date.tomorrow("YYYY-MM-DD") %>
```

We'll see in the next part the syntax required to write some commands.

---

# Syntax

Templater uses a custom templating engine (rusty_engine) syntax to declare a command. You may need a bit of time to get used to it, but once you get the idea, the syntax is not that hard.

All of Templater's functions are JavaScript objects that are invoked using a **command**.

## Command Syntax

A command **must** have both an opening tag `<%` and a closing tag `%>`.
A complete command using the `tp.date.now` internal function would be: `<% tp.date.now() %>`

## Function Syntax

### Objects Hierarchy

All of Templater's functions, whether it's an internal function or a user function, are available under the `tp` object. You could say that all our functions are children of the `tp` object. To access the "child" of an object, we have to use the dot notation `.`

This means that a Templater function invocation will always start with `tp.<something>`

### Function Invocation

To invoke a function, we need to use a syntax specific to functions calls: appending an opening and a closing parenthesis after the function name.

As an example, we would use `tp.date.now()` to invoke the `tp.date.now` internal function.

A function can have arguments and optional arguments. They are placed between the opening and the closing parenthesis:

```javascript
tp.date.now(arg1_value, arg2_value, arg3_value, ...)
```

All arguments must be passed in the correct order.

The arguments of a function can have different **types**. Here is a non-exhaustive list of the possible types of a function:
* A `string` type means the value must be placed within simple or double quotes (`"value"` or `'value'`)
* A `number` type means the value must be an integer (`15`, `-5`, ...)
* A `boolean` type means the value must be either `true` or `false` (completely lower case), and nothing else.

The type of an argument must be respected when calling a function, or it won't work.

### Function Documentation Syntax

The documentation for the internal functions of Templater are using the following syntax:

```javascript
tp.<my_function>(arg1_name: type, arg2_name?: type, arg3_name: type = <default_value>, arg4_name: type1|type2, ...)
```

Where:
* `arg_name` represents a **symbolic** name for the argument, to understand what it is.
* `type` represents the expected type for the argument. This type must be respected when calling the internal function, or it will throw an error.

If an argument is optional, it will be appended with a question mark `?`, e.g. `arg2_name?: type`
If an argument has a default value, it will be specified using an equal sign `=`, e.g. `arg3_name: type = <default_value>`.
If an argument can have different types, it will be specified using a pipe `|`, e.g. `arg4_name: type1|type2`

#### Syntax Warning

Please note that this syntax is for documentation purposes only, to be able to understand what arguments the function expects.
You mustn't specify the name nor the type nor the default value of an argument when calling a function. Only the value of the arguments are required.

#### Example

Let's take the `tp.date.now` internal function documentation as an example:

```
tp.date.now(format: string = "YYYY-MM-DD", offset?: number|string, reference?: string, reference_format?: string)
```

This internal function has 4 optional arguments:
* a format of type `string`, with a default value of `"YYYY-MM-DD"`.
* an offset of type `number` or of type `string`.
* a reference of type `string` .
* a reference_format of type `string` .

That means that **valid invocations** for this internal function are:
* `<% tp.date.now() %>`
* `<% tp.date.now("YYYY-MM-DD", 7) %>`
* `<% tp.date.now("YYYY-MM-DD", 7, "2021-04-09", "YYYY-MM-DD") %>`
* `<% tp.date.now("dddd, MMMM Do YYYY", 0, tp.file.title, "YYYY-MM-DD") %>` *Assuming the file name is of the format: "YYYY-MM-DD"

On the other hand, **invalid invocations** are:
* `tp.date.now(format: string = "YYYY-MM-DD")`
* `tp.date.now(format: string = "YYYY-MM-DD", offset?: 0)`

---

# Commands

## Command Types

Templater defines 2 types of opening tags, that defines 2 types of **commands**:
* `<%`: Interpolation command. It will output the result of the expression that's inside.
* `<%*`: JavaScript execution command. It will execute the JavaScript code that's inside. It does not output anything by default.

The closing tag for a command is always the same: `%>`

## Command Utilities

In addition to the different types of commands, you can also use command utilities. They are also declared in the opening tag of the command. All command utilities work with all command types. The available command utilities are:
* Whitespace Control
* Dynamic Commands

---

# Internal Functions

The different internal variables and functions offered by Templater are available under different **modules**, to sort them. The existing **internal modules** are:
* App module: `tp.app`
* Config module: `tp.config`
* Date module: `tp.date`
* File module: `tp.file`
* Frontmatter module: `tp.frontmatter`
* Hooks module: `tp.hooks`
* Obsidian module: `tp.obsidian`
* System module: `tp.system`
* Web module: `tp.web`

If you understood the object hierarchy correctly, this means that a typical internal function call looks like this: `<% tp.<module_name>.<internal_function_name> %>`

## Contribution

I invite everyone to contribute to this plugin development by adding new internal functions.

---

# Frontmatter Module

This modules exposes all the frontmatter variables of a file as variables.

## Documentation

`tp.frontmatter.<frontmatter_variable_name>`

Retrieves the file's frontmatter variable value.

If your frontmatter variable name contains spaces, you can reference it using the bracket notation like so:

```
<% tp.frontmatter["variable name with spaces"] %>
```

## Examples

Let's say you have the following file:

```yaml
---
alias: myfile
note type: seedling
---

file content
```

Then you can use the following template:

```
File's metadata alias: <% tp.frontmatter.alias %>
Note's type: <% tp.frontmatter["note type"] %>
```

For lists in frontmatter, you can use JavaScript array prototype methods to manipulate how the data is displayed:

```yaml
---
categories:
  - book
  - movie
---
```

```
<% tp.frontmatter.categories.map(prop => `  - "${prop}"`).join("\n") %>
```

---

# File Module

This module contains every internal function related to files.

## Function Reference

### tp.file.content

The string contents of the file at the time that Templater was executed. Manipulating this string will not update the current file.

#### Example
```
<% tp.file.content %>
```

### tp.file.create_new

Creates a new file using a specified template or with a specified content.

```javascript
tp.file.create_new(template: TFile ⎮ string, filename?: string, open_new: boolean = false, folder?: TFolder | string)
```

[Continues with detailed documentation of each file module function...]