# Metadata Menu Documentation

## General Concepts

Metadata Menu can manage any metadata field located in:
- Frontmatter (YAML syntax)
- Body of the note with the syntax `field::` (dataview style, dataview plugin is required)

For either location, a definition (type & options) must be set.

## Field Types

The following types are available:

| Type | Description |
|------|-------------|
| Input | Default type, accepts any value |
| Boolean | Accepts true, false, or null value |
| Number | Accepts a number |
| Select | Accepts a single value from a list |
| Multi | Accepts multiple values from a list |
| Cycle | Cycles through values from a list |
| File | Accepts a link to a file from your vault |
| MultiFile | Accepts multiple file links |
| Media | Accepts a link to a media file from your vault |
| MultiMedia | Accepts multiple links to media files |
| Date | Accepts a date |
| DateTime | Accepts a date with time |
| Time | Accepts a time |
| Lookup | Accepts a lookup query |
| Formula | Makes calculations based on note's fields |
| Canvas | Updates with links in a canvas |
| Canvas Group | Updates with groups in a canvas |
| Canvas Group Link | Updates with groups links in a canvas |
| JSON | Accepts a JSON object |
| YAML | Accepts a YAML object |
| Object | Accepts a collection of fields |
| Object List | Accepts a list of collection of fields |

### Limitations
YAML, Object, and Object list field types are only available in the frontmatter section.

## Field Definition

### Structure
A field setting consists of:
1. A name
2. A type (from the Field Types list above)
3. Options depending on the type

### Definition Locations
Field settings can be defined in:
- Metadata Menu settings
- Fileclass notes

### Priority Management
**Note:** If a field has a setting defined in both the Metadata Menu settings AND in a fileclass note, the fileclass setting takes priority.

## Controls

Fields can be modified or added from several locations:

1. Autocompletion within the editor mode
2. Obsidian and plugins menus:
   - File explorer
   - Note
   - Calendar
   - Context menu of a link
   - Various other plugins (not fully tested)
3. Dataview table (requires dataview plugin)
4. Metadata Menu button (appears next to each note's name):
   - File explorer
   - Tab header
   - Links
5. Tableview of a fileclass view
6. Metadata Menu code block

## Settings

### Global Settings

#### Scope
- Choose between managing only frontmatter fields or both frontmatter and inline-fields
- **Note:** Including inline-fields may be slower with very large files
- Requires plugin reload when changed

#### Display Options
- **Context Menu Field Options:**
  - Toggled ON: Displays one control item per field in the target note
  - Toggled OFF: Displays a single "Field Options" item leading to a modal display

#### Global Configurations
- **Globally Ignored Fields:** List fields to be excluded from context menus (comma separated)
- **First Day of Week:** Select starting day for Date fields' datepicker (default: Monday)

#### Exclusions
Files can be excluded based on:
- Path
- Extension
- Name (using regex pattern)

### Preset Field Settings

To manage fields globally throughout your vault:
1. Click "+"
2. Type field name
3. Select field type
4. Set options

### Fileclass Settings

#### Overview
- Allows different field behaviors based on note "class"
- Uses a frontmatter attribute (default name: fileClass)
- Fileclass is defined in a specific note within a designated folder

#### Configuration
1. **Fileclass Files Folder:**
   - Set location path in class Files Path setting
   - Include trailing slash

2. **Fileclass Alias:**
   - Allows combining fileClass attribute with existing categorization
   - Set alternative name in fileClass field alias setting

3. **Global Fileclass:**
   - Applies to all notes, even without fileClass attribute
   - Useful for setting preset fields in note format
   - Falls back to plugin settings if improperly configured

#### Additional Settings
- **Result per Page:** Default number for table view and code blocks
- **Add Fileclass After Create:** Toggle to display fileclass selection for new files
- **Fileclass Selector:** Option to hide automatic selector in note fields modal
- **Fileclass Queries:** Define fileClasses based on dataview queries
  - Last matching fileClass takes priority

### Extra Button Settings

Toggle Metadata Menu form access button display for:
- Links in reading mode
- Links in live preview
- File explorer entries
- Search panel references
- Backlinks panel references
- Tab headers
- Properties

---

# Metadata Menu fields

Metadata Menu manages fields thanks to fields definition.

A field can be identified in serveral sections of a markdown file:

## Fields in the frontmatter section

Called `Property`in Obsidian, fields in frontmatter are of form: `<name>: <value>`

## Fields in the body section of the file with dataview notation

Following Dataview notation, you can define fields:

- in the body of the file, occupying the full line `<name>:: <value>`
- inside a line in the body of the file, surrounded with brackets or parenthesis: `... (<name>:: value) ...`or `... [<name>:: <value>]...`

## Field definition

In order to give metadata menu the capability to manage a field, you'll have to set a definition for it. You can set a definition for a field in two places:

- in the [plugin settings](https://mdelobelle.github.io/metadatamenu/settings/): the field definition will be applied to every file of your vault
- in a [fileClass](https://mdelobelle.github.io/metadatamenu/fields/fileclass.md): the field definition will be applied to the files [mapped with this fileClass](https://mdelobelle.github.io/metadatamenu/fileclasses/#file-mapping)

All fields defintions are composed of:

- [common settings](https://mdelobelle.github.io/metadatamenu/fields/#fields-common-settings)
- specific options depending on their [type](https://mdelobelle.github.io/metadatamenu/fields/#fields-types)

These options are translated in a [field object](https://mdelobelle.github.io/metadatamenu/fields/#field-object-structure) stored:

- as a `fields` item in the [fileClass](https://mdelobelle.github.io/metadatamenu/fields/fileclass.md) file for fileclasses fields
- as a `fields` item in the `data.json` file of the plugin's folder for [preset fields](https://mdelobelle.github.io/metadatamenu/settings/#preset-field-settings)

### Field object structure

|key|value|
|---|---|
|name|field name|
|type|[field type](https://mdelobelle.github.io/metadatamenu/general/#field-types)|
|id|unique string automatically generated to identify the field across the vault|
|options|specific options by field type|
|path|The path of the field in the parent herarchy:  <br>- empty or "" if the field doesn't have a parent  <br>- if the field has a parent (e.g. field of type [Object](https://mdelobelle.github.io/metadatamenu/fields/#object) or [ObjectList](https://mdelobelle.github.io/metadatamenu/fields/#object-list))  <br>- ____ if the field has a parent that also has a parent  <br>- .... any depth level is supported|

### Indexed Path

For each field instance in a file, the plugin computes an indexedPath attribute for each existing field in the plugin's index.

It is used to identify the field instance in an [ObjectList](https://mdelobelle.github.io/metadatamenu/fields/#object-list) and has to be passed to the `id` attribute of the [postValues](https://mdelobelle.github.io/metadatamenu/api/#postvalues) method.

It is composed of each parent `id` separated by `____`, the position in each parent object list next to the parent `id` between square brackets, and ends with the field's `id`

Example of a "Company" fileClass fields: |Field name|Type|id|path| |---|---|---|---| |City|Input|HDERA|| |Employees|ObjectList|dx8Mth|| |Name|Input|7r1kwd|dx8Mth| |Role|Input|PCNGE4|dx8Mth| |Contact Info|Object|Y0dsfZ|dx8Mth| |e-mail|Input|hRlSsW|dx8Mth**__Y0dsfZ| |phone number|Input|xLPW7T|dx8Mth_**_Y0dsfZ|

Example of computed indexedPath for each field in a file:

`ACME.md`

`--- #Field                            # indexedPath City: Paris                       # HDERA Employees:                        # dx8Mth   - Name: John Doe                # dx8Mth[0]____7r1kwd     Role: CFO                     # dx8Mth[0]____PCNGE4     Contact Info:                 # dx8Mth[0]____Y0dsfZ       e-mail: john.doe@acme.ob    # dx8Mth[0]____Y0dsfZ____hRlSsW       phone number: 1234567891    # dx8Mth[0]____Y0dsfZ____xLPW7T   - Name: Ann Martin              # dx8Mth[1]____7r1kwd     Role: CEO                     # dx8Mth[1]____PCNGE4     Contact Info:                 # dx8Mth[1]____Y0dsfZ       e-mail: ann.martin@acme.ob  # dx8Mth[1]____Y0dsfZ____hRlSsW       phone number: 1234567890    # dx8Mth[1]____Y0dsfZ____xLPW7T ---`

## Fields Types

Metadata Menu can manage several field types. Choose them depending on the kind of data that you want to put in your field:

- [Input](https://mdelobelle.github.io/metadatamenu/fields/#input) : this is the default type. it will `Accept any value`
- [Boolean](https://mdelobelle.github.io/metadatamenu/fields/#boolean): a field that can `Accept true or false` or null value
- [Number](https://mdelobelle.github.io/metadatamenu/fields/#number): a field that can `Accept a number`
- [Select](https://mdelobelle.github.io/metadatamenu/fields/#select): a field that can `Accept a single value from a list`
- [Multi](https://mdelobelle.github.io/metadatamenu/fields/#multi): a field that can `Accept multiple values from a list`
- [Cycle](https://mdelobelle.github.io/metadatamenu/fields/#cycle): a field that will `Cycle through values from a list`
- [File](https://mdelobelle.github.io/metadatamenu/fields/#file): a field that will `Accept a link to a file from your vault`
- [MultiFile](https://mdelobelle.github.io/metadatamenu/fields/#multi-file): a field that will `Accept multiple links`
- [Media](https://mdelobelle.github.io/metadatamenu/fields/#media): a field that will `Accept a link to a media file from your vault`
- [MultiMedia](https://mdelobelle.github.io/metadatamenu/fields/#multi-media): a field that will `Accept multiple links to media files`
- [Date](https://mdelobelle.github.io/metadatamenu/fields/#date): a field that will `Accept a date`
- [DateTime](https://mdelobelle.github.io/metadatamenu/fields/fieldsmd.#datetime): a field that will `Accept a date with time`
- [Time](https://mdelobelle.github.io/metadatamenu/fields/fieldsmd.#time): a field that will `Accept a time`
- [Lookup](https://mdelobelle.github.io/metadatamenu/fields/#lookup): a field that will `Accept a lookup query`
- [Formula](https://mdelobelle.github.io/metadatamenu/fields/#formula): a field that will `Make Calculation based on note's fields`
- [Canvas](https://mdelobelle.github.io/metadatamenu/fields/#canvas): a field that will `Update with links in a canvas`
- [Canvas Group](https://mdelobelle.github.io/metadatamenu/fields/#canvas-group): a field that will `Update with groups in a canvas`
- [Canvas Group Link](https://mdelobelle.github.io/metadatamenu/fields/#canvas-group-link): a field that will `Update with groups links in a canvas`
- [JSON](https://mdelobelle.github.io/metadatamenu/fields/#json): a field that will `Accept a JSON object`
- [YAML](https://mdelobelle.github.io/metadatamenu/fields/fieldsmd.#yaml): a field that will `Accept a YAML object`
- [Object](https://mdelobelle.github.io/metadatamenu/fields/#object): a field that will `Accept a collection of fields`
- [Object List](https://mdelobelle.github.io/metadatamenu/fields/#object-list): a field that will `Accept a list of collection of fields`

## Fields common settings

### Field name

The name of the field - case sensitive.

Metadata menu will search for this name to parse the files mapping the [fileclass](https://mdelobelle.github.io/metadatamenu/fileclasses/) (if the file is [mapping](https://mdelobelle.github.io/metadatamenu/fileclasses/#file-mapping) at least one fileclass) or all files if no fileClass is defined unless this field or the files are [excluded](https://mdelobelle.github.io/metadatamenu/settings/#globally-ignored-fields) from indexing

A field's name is unique [for a given level](https://mdelobelle.github.io/metadatamenu/fields/#nesting-fields) per [fileclass](https://mdelobelle.github.io/metadatamenu/fileclasses/) (or within the [preset fields](https://mdelobelle.github.io/metadatamenu/settings/#preset-field-settings))

### Parent

This setting is available if there is at least one [Object](https://mdelobelle.github.io/metadatamenu/fields/#object) or [Object List](https://mdelobelle.github.io/metadatamenu/fields/#object-list) field created for this [fileclass](https://mdelobelle.github.io/metadatamenu/fileclasses/) or in the [preset fields](https://mdelobelle.github.io/metadatamenu/settings/#preset-field-settings)

Some field types can't have parents (they can't be nested): [Lookup](https://mdelobelle.github.io/metadatamenu/fields/#lookup), [Formula](https://mdelobelle.github.io/metadatamenu/fields/#formula), [Canvas](https://mdelobelle.github.io/metadatamenu/fields/#canvas), [Canvas Group](https://mdelobelle.github.io/metadatamenu/fields/#canvas-group), [Canvas Group Link](https://mdelobelle.github.io/metadatamenu/fields/#canvas-group-link)

### Set a command for this field

If toggled, this field will be accessible with Obsidian's command palette.

You can set an icon for the button of the command in the mobile toolbar (icon names have to be one of the https://lucide.dev library)

### Frontmatter List display type

Defines the way that multi-value type fields ([Multi](https://mdelobelle.github.io/metadatamenu/fields/#multi), [MultiFile](https://mdelobelle.github.io/metadatamenu/fields/#multi-file)) are displayed in the frontmatter:

- As an array inline: `Field: [Value1, Value2]`
- As an indented list below the field name:

`Field:   - Value 1   - Value 2`

### Inline field style

[Inline fields](https://mdelobelle.github.io/metadatamenu/fields/#fields-in-the-body-section-of-the-file-with-dataview-notation) can be automatically styled with four styles (you can mix them):

- bold,
- italic,
- strikethrough
- code

NB: the changes to these settings won't affect existing fields. The new style will be applied the next time the field's value has changed

## Field type

Select the [type](https://mdelobelle.github.io/metadatamenu/fields/#field-type) of the field. The type of the field will define specific [controls](https://mdelobelle.github.io/metadatamenu/controls/) (buttons, forms, ....) and validation to enter or modify values

> [!IMPORTANT] once saved, you won't be able to change the type of the field in order to avoid inconsistencies in the indexing.

If you really need to change the type of a field, and if you are sure that it won't cause any discrepancies in your data, you'll have to remove this field from the fileclass or the preset fields and create a new one with the same name and the new type.

Some types are only available in the frontmatter:

- [YAML](https://mdelobelle.github.io/metadatamenu/fields/#yaml)
- [Object](https://mdelobelle.github.io/metadatamenu/fields/#object)
- [Object List](https://mdelobelle.github.io/metadatamenu/fields/#object-list)

## Nesting fields

If the preset fields or a fileclass contains at least one [Object](https://mdelobelle.github.io/metadatamenu/fields/#object) or [Object List](https://mdelobelle.github.io/metadatamenu/fields/#object-list) field, then you can nest fields.

Nesting a field (A) consists of setting an Object or Object List field (B) as a parent of (A)

Each field sharing the same parent will have the same "level". If a field has no parent it is considered as "root"

Field names are unique per level per fileClass, or unique per level in the preset Fields settings

Object and Object List field can also have parent, therefore you can nest "infinitely"

## Input

A basic type to store a string.

### options

You can define a template to help fill your `Input` field.

Every item enclosed in curly braces will be transformed into an input or a dropdown select in the field modal. You can modify the "templatized" text afterwards:

- {{Name}} will be transformed in an input field labeled "Name"
- {{color: ["red", "green", "blue"]}} will be transformed into a dropdown select field labelled "color" with 3 value: "red", "green" and "blue

### controls

- Field modal: text area with optional inputs and dropdown selects based ont the tempplate
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: in-cell value modifier

## Boolean

A type that accepts `true` or `false` values.

If the field's value is anything else than `true`, it will be mapped with `false`

### controls

- Field modal: choose value
- Command palette: toggle value
- Note Modal: toggle value
- Dataview table: toggle button

## Number

A type that accepts a number (int or float).

### options

You can define an optional:

- (increment/decrement) step
- minimum value
- maximum value

### controls

- Field modal: change value, increment, decrement
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: change value in-cell, increment, decrement

## Select

A type that accepts values from a list.

### options

You can define several sources for the values:

- a note path: each line of the target note will be an option for the dropdown selector
- a javascript function returning an array of string (dataview api is available with the `dv` keyword, the dv.current() variable is available with the `current` keyword)
- the setting form (add/edit/remove values one by one)

### controls

- Field modal: select value, clear value, add a new value to the settings
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: open field modal
- Inline value suggestor: choose a value from the list

## Cycle

A type that will cycle through values from a list.

### options

You can define several sources for the values:

- a note path: each line of the target note will be an option for the dropdown selector
- a javascript function returning an array of string (dataview api is available with the `dv` keyword, the dv.current() variable is available with the `current` keyword)
- the setting form (add/edit/remove values one by one)

#### `Cycle begins by a null value`

When set to true, the value of the field will be set to null if increasing one step after the last value of the list

### controls

- Command palette: move to the next value
- Note modal: move to the next value
- Dataview table: move to the next value
- Inline value suggestor: choose a value from the list

## Multi

A type that multiple values from a list.

### options

You can define several sources for the values:

- a note path: each line of the target note will be an option for the dropdown selector
- a javascript function returning an array of string (dataview api is available with the `dv` keyword, the dv.current() variable is available with the `current` keyword)
- the setting form (add/edit/remove values one by one)

### controls

- Field modal: select/unselect value(s), clear all values, add a new value to the settings
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: open field modal
- Inline value suggestor: choose a value from the list, type a comma to add another value...

## Date

A type that accepts a date.

### options

You can define:

- the date format as defined in [moment.js](https://momentjs.com/docs/#/displaying/format/) library
- insert link by default: The date will be embedded in an internal link : `[[2024-01-01]]`
- Link path : if provided, the path will be explicitely included in the internal link : `[[Daily/Notes/2024-01-01]]`
- Define a shift interval: a value in [moment.js duration notation](https://momentjs.com/docs/#/durations/creating/)
- Choose a [cycle field](https://mdelobelle.github.io/metadatamenu/fields/#cycle) belonging to this fileclass or preset fields that contains duration values. Each time you shift the date, the date will be added the current value, and the cycle field will be updated with the next value in the list. This "Interval field" can't be a [nested field](https://mdelobelle.github.io/metadatamenu/fields/#nesting-fields)

#### Template for link path

You can use templates to build your path with the formating token syntax of [moment.js](https://momentjs.com/docs/#/parsing/string-format/). For example `Daily/Notes/{{YYYY}}/{{MM}}` will render `[[Daily/Notes/2024/01/2024-01-01]]`. That can be useful if you have split subfolder for your daily notes for example

### controls

- Field modal: input a date, choose a date from a datepicker, insert as link/as raw text, shift ahead
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: open field modal

if the plugin [Natural Language Dates](https://github.com/argenos/nldates-obsidian) is installed, you can use it in the field modal when typing the date in the input field

## Datetime

A type that accepts a date with time

### options

You can define:

- the time format as defined in [moment.js](https://momentjs.com/docs/#/displaying/format/) library
- Define a shift interval: a value in [moment.js duration notation](https://momentjs.com/docs/#/durations/creating/)
- Choose a [cycle field](https://mdelobelle.github.io/metadatamenu/fields/#cycle) belonging to this fileclass or preset fields that contains duration values. Each time you shift the date, the time will be added the current value, and the cycle field will be updated with the next value in the list. This "Interval field" can't be a [nested field](https://mdelobelle.github.io/metadatamenu/fields/#nesting-fields)

### controls

- Field modal: input a date, choose a date from a datepicker, insert as link/as raw text, shift ahead
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: open field modal

## Time

A type that accepts a time (hours, minutes, seconds, milliseconds)

### options

You can define:

- the date and time format as defined in [moment.js](https://momentjs.com/docs/#/displaying/format/) library
- Define a shift interval: a value in [moment.js duration notation](https://momentjs.com/docs/#/durations/creating/)
- Choose a [cycle field](https://mdelobelle.github.io/metadatamenu/fields/#cycle) belonging to this fileclass or preset fields that contains duration values. Each time you shift the date, the date will be added the current value, and the cycle field will be updated with the next value in the list. This "Interval field" can't be a [nested field](https://mdelobelle.github.io/metadatamenu/fields/#nesting-fields)

### controls

- Field modal: input a date, choose a date from a datepicker, insert as link/as raw text, shift ahead
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: open field modal

## File

A type that accepts an internal link to a file in your vault

### options

You can define : - a [dataviewjs query](https://mdelobelle.github.io/metadatamenu/fields/#dataview-query) returning an array of pages - a javascript function to return an [alias](https://mdelobelle.github.io/metadatamenu/fields/#alias) for each result - a javascript function to [sort](https://mdelobelle.github.io/metadatamenu/fields/#sorting-order) the results within the query

#### `Dataview query`

It accepts a call to the api function dv.pages that will return pages from your vault according to this function. Dataview api can be accessed with the `dv` variable, and the current page (dv.page object) is available with the `current` variable

you’ll have to use dv.pages function explained here : https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvpagessource

it takes a « source » (explained here https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvpagessource):

you can also improve the filtering by applying a combination of other functions to the result returned by dv.pages(source):

- dv.pages(…).where(…)
- dv.pages(…).filter(…)
- dv.pages(…).limit(…)
- etc

you can combine them:

- dv.pages(…).where(…).limit(...)

see documentation here https://blacksmithgu.github.io/obsidian-dataview/api/data-array/#raw-interface

A good source of help to build dataview queries is the obsidian discord server > plugin-advanced > dataview : the community is really helpful there.

**Advanced usage**

1. If you want to suggest only the pages that are defined on a specific field inside your notes, you can write the following:

`dv.pages().map(p => p.field)`

where `field` is the name of the inline field you want to target.

1. You can also return an array of links directly from this query. This means that you can retrieve the value of a single field in any of your files.

Example:

`dv.page("Jules Verne").books`

This would work if you have a file named `Jules Verne.md` in your vault (its path doesn't matter) that contains an inline field named `books` filled with one or more links to other pages.

For both of the above use cases : - only existing pages will appear in the suggestion - frontmatter fields are not supported

#### `Alias`

It accepts a javascript instruction returning a string using dataview `page` attribute

example: `"🚀" + (page.surname || page.file.name)`

#### `Sorting order`

It accepts a javascript instruction returning a number using two files `a` and `b`

example 1: `a.basename < b.basename ? -1 : 1`

example 2: `a.stat.ctime - b.stat.ctime`

### commands

- Field modal: select a file, clear the value, type a string to filter the results
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: open field modal
- Inline value suggestor: choose a value from the list

## Multi File

A type that accepts amultiple internal links to files in your vault

### options

You can define :

- a [dataviewjs query](https://mdelobelle.github.io/metadatamenu/fields/#dataview-query) returning an array of pages
- a javascript function to return an [alias](https://mdelobelle.github.io/metadatamenu/fields/#alias) for each result
- a javascript function to [sort](https://mdelobelle.github.io/metadatamenu/fields/#sorting-order) the results within the query

### commands

- Field modal: select/unselect a file, clear the values, type a string to filter the results
- Command palette: open field modal
- Note modal: open field modal
- Dataview table: open field modal
- Inline value suggestor: choose a value from the list, type a comma to add another value...

## Media

A type that accepts an internal link to a media file in your vault

### options

You can define :

- the folders where your media files are located
- the embed size for images
- display the media modal search as list or cards (gallery style)

## MultiMedia

Multiple media files

## Lookup

A lookup field will look for targetted fields (aka related field) in targetted notes (aka Dataview JS Query results) and display the result in a presistent manner. Unlike a dataview view, a lookup field will change the content of the file by updating the value of the lookup field. So even if you disable dataview plugin, the lookup field will still contain the value. Lookup fields can therefore be "published".

### `Lookup` options

#### `Pages to look for in your vault (DataviewJS Query)`

A DataviewJS query of the form `dv.pages(...)` that has to return a data array of `page` object (see [Dataview Pages source definition](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvpagessource))

#### `Name of the related field`

The name of the field that the plugin should look for in pages returned by the query. The plugin will filter the results returned by the query with to match the value of the `related field` with the source note's link

#### `Type of output`

Lookup field can display the result in a very various ways:

##### Links list

Simple list of links of the notes matching the query, comma separated

##### Links indented list

Just like [Links list](https://mdelobelle.github.io/metadatamenu/fields/#links-list), displayed as a bullet list below the field

##### Built-in Summarizing function

NB: For this option you'll have to set the name of the target field on which you want to apply the built-in function in the `Summarized field name` input (not necessary for the `CountAll` function)

- `Sum`: sum of the values of a specific field in the notes returned by the query
- `Count`: Counts all pages matching the query where the "Summarized field" is non empty
- `CountAll`: Counts all the pages matching the query
- `Average`: Returns the average value of summarized fields in the pages matching the query
- `Max`: Returns the maximum value of summarized fields in the pages matching the query
- `Min`: Returns the minimum value of summarized fields in the pages matching the query

##### Custom list rendering function

like the [Links](https://mdelobelle.github.io/metadatamenu/fields/#links) option, but you can customize the way each value is displayed. The object `page` is available (see [Dataview page object](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/#pages) for all attributes available in the `page object`) and can be used to build your output. The output has to be a string.

##### Custom indented list rendering function

Just like the [Custom list](https://mdelobelle.github.io/metadatamenu/fields/#custom-list-rendering-function). Displayed as a bullet list below the field

##### Custom summarizing function

like the [Built-in summarizing function](https://mdelobelle.github.io/metadatamenu/fields/#built-in-summarizing-function) option but you can customize the function you want to apply on the data array of pages returned by the query.

The `pages` [data array](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvpagessource) object is available.

You have the write the code of the function, this function has to return something.

Example1: `return pages.length`

Example2: `const i=0.0;const sum = pages.reduce((p, c) => p + c["age"], i); return sum / pages.length`

### commands

- Command palette: update lookup field (if it is not auto-updated)
- Note modal: update lookup field (if it is not auto-updated)

### Example

If you have a lookup field `students` defined like this:

- name: `students``
- dataview query: `dv.pages("#student")``
- Name of the related field: `School`
- auto-update: true

If you have the following notes

`John.md ========== #student School:: [[Princeton]]`

`Anna.md ========== #student School:: [[Princeton]]`

`Steve.md ========== #student School:: [[Princeton]]`

`Eric.md ========== #student School:: [[HEC]]`

if you put `students::` field in the following files, you'll get the following results

`HEC.md ========== students:: [[Eric]] // auto-filled`

`Princeton.md ========== students:: [[John]], [[Anna]], [[Steve]] // auto-filled`

## Formula

A field that returns the result of a javascript function

### options

You can define :

- if the field will auto-update each time the content of your vault has changed (can slow down obsidian if you have many of those fields and a lot of files)
- a javascript function returning a value. (the dataview api is available with th `dv` keyword, the current dataview page object is available with the keyword `current`)

### commands

- Command palette: update lookup field (if it is not auto-updated)
- Note modal: update lookup field (if it is not auto-updated)

### example

if you have the field `mixed sum`defined like this:

- name: `mixed sum`
- auto-update: true
- javascript formula: `current.apples + current.bananas`

If you put the field `mixed sum::` in the following file, you'll get the following result

`basket.md ========= apples:: 7 bananas:: 3 mixed sum:: 10 // auto-calculated`

## Canvas

A canvas field of a given note is automatically updated with other notes connected to it in a specific canvas.

### options

#### `Path of the canvas`

The path to canvas where you want to search for matching connexions

#### `Nodes to target from this note`

The direction of the edge connecting this node with other nodes:

- `Incoming`: only the nodes with edges pointing to this node will be triggered
- `Outgoing`: only the nodes to which this node is pointing will be triggered
- `Both Side`: every nodes connected to this node will be triggered

#### `Node matching colors`

Only the nodes connected to this node that have a color within the selected values will be triggered. You can define custom color values on top of the 6 default colors available in the canvas

#### `Matching files`

You can define a dvJS query that will return files. Only the nodes connected to this node whom corresponding files belong to the dvJS query result will be triggered

#### `Edge matching color`

Only the nodes connected to this node with an edge that has a color within the selected values will be triggered. You can define custom color values on top of the 6 default colors available in the canvas

#### `Edge matching from side`

Only the nodes connected to this node with an edge starting from the selected side values will be triggered.

#### `Edge matching to side`

Only the nodes connected to this node with an edge pointing to the selected side values will be triggered.

#### `Edge matching label`

Only the nodes connected to this node with an edge that has a label within the values list will be triggered. You can remove a label from the list by clicking on the cross in the chip

#### `Add new matching label`

Add new labels to match with edge labels.

## Canvas Group

A canvas group field of a given note is automatically updated with names of matching groups their nodes belong to in a specific canvas.

### options

#### `Path of the canvas`

The path to canvas where you want to search for matching groups

#### `Group matching color`

Only the groups surrounding this node that have a color within the selected values will be triggered. You can define custom color values on top of the 6 default colors available in the canvas

#### `Group matching label`

Only the groups surrounding this node with an edge that has a label within the values list will be triggered. You can remove a label from the list by clicking on the cross in the chip

#### `Add new matching label`

Add new labels to match with groups labels.

## Canvas Group Link

Combination of the `Canvas` and the `Canvas Group` field options. This time, the field will target nodes linked to the groups the node belongs to

### options

- [canvas link options](https://mdelobelle.github.io/metadatamenu/fields/#options-9)
- [canvas group options](https://mdelobelle.github.io/metadatamenu/fields/#options-10)

## JSON

A simple JSON field that will be serialized when included as an inline-field, or as a "JSON in YAML" when included in the frontmatter. The properties in the JSON are "free" meaning that they are not tied to a field definition

### Commands

- Field modal: edit the JSON object
- Command palette: open field modal
- Note modal: open field modal

## Yaml

A simple YAML field. The properties in the YAML are "free" meaning that they are not tied to a field definition. This field type is only available in the frontmatter

### Commands

- Field modal: edit the YAML object
- Command palette: open field modal
- Note modal: open field modal

## Object

A field that acts as a **parent** for other fields. When created, it will appear in the the "Parent" dropdown selector of a field setting. This field is only available in the frontmatter section

### Commands

- Field modal: select the nested field to edit and trigger its "Field modal" command, add a missing child field to this object
- Command palette: open field modal
- Note modal: go to the note modal of this object, listing all children fields and access their commands, add a missing child field to this object

## Object List

A field that acts as a **parent** for other fields. When created, it will appear in the the "Parent" dropdown selector of a field setting. This field is only available in the frontmatter section.

### Commands

- Field modal: select the nested set of fields to edit and open the corresponding object field modal, add a new item to this object list, remove an item from this object list
- Command palette: open field modal
- Note modal: go to the note modal of this object list, listing all items of the list, click on one item to access the Note modal page of the corresponding Object

---

# FileClass

Manage preset values based on the context of a file (fileClass)

## What is a fileClass

A fileClass is basically a simple file located in the folder defined in the [plugin's settings](https://mdelobelle.github.io/metadatamenu/settings/#fileclass-files-folder)

The name of the file will be the name of the class.

To map a file of your vault with a fileClass you have [several options](https://mdelobelle.github.io/metadatamenu/fileclasses/#file-mapping)

You can sort your fileClasses in sub-folders. Then if you want to use them in a note, just type their sub-path in the frontmatter of the note: `fileClass: <sub-folder>/<sub-sub-folder>/<fileClass name>`

the frontmatter section of this file contains the [Fileclass settings](https://mdelobelle.github.io/metadatamenu/fileclasses/#fileclass-settings) and [fields definition](https://mdelobelle.github.io/metadatamenu/fileclasses/) for this fileClass. The body of this file is not used by the plugin, you can write anything you want in there.

## setup

1. Define the folder where you want to store your class files in the [plugin's settings](https://mdelobelle.github.io/metadatamenu/settings/#fileclass-files-folder)
2. Create a note in this folder, let's say `music.md`
3. A button will appear in the tab header of this note. click on it to access the "fileClass view" composed of 3 tabs
    - A table view listing all files that inherit this fileClass
    - A Fileclass Fields views where you can add/change/remove fields definitions for this fileclass
    - A [Fileclass Settings](https://mdelobelle.github.io/metadatamenu/fileclasses/#fileclass-settings) view where you can change the settings of the fileclass

## File mapping

You have several options to map a file with a fileClass. Those options can be combined to associate multiple fileclasses to a given file. In case 2 fileclasses mapped with the same file have fields with the same name, the field will be mapped according to this priority order: 1. fileClass value in the [frontmatter](https://mdelobelle.github.io/metadatamenu/fileclasses/#basic-mapping) 2. [Tag](https://mdelobelle.github.io/metadatamenu/fileclasses/#map-with-tag) match 3. [Path](https://mdelobelle.github.io/metadatamenu/fileclasses/#files-paths-option) match 4. [Bookmark group](https://mdelobelle.github.io/metadatamenu/fileclasses/#bookmark-group-option) match 5. [fileClassQuery](https://mdelobelle.github.io/metadatamenu/fileclasses/#map-with-a-query) match 6. [Global fileClass](https://mdelobelle.github.io/metadatamenu/fileclasses/#global-fileclass-mapping) 7. settings [preset fields](https://mdelobelle.github.io/metadatamenu/settings/#preset-field-settings)

### Basic mapping

include the name of the fileclass in the frontmatter of a note:

`Bob Dylan.md =============================== --- fileClass: music ---  some cool stuff about Bob Dylan`

`Bob Dylan.md` will be mapped with the fileClass `music`

you can set multiple fileClass for a file:

`Obsidian.md ============================== --- fileClass:   - company    - pkm ---  some cool stuff about Obsidian`

### Map with tag

Include a tag that matches the fileclass and set [mapWithTag](https://mdelobelle.github.io/metadatamenu/fileclasses/#map-with-tag) as true:

`Bob Dylan.md =============================== #music  some cool stuff about Bob Dylan`

`Bob Dylan.md` will be mapped with the fileClass `music`

Or choose any other tag defined in the [tag names](https://mdelobelle.github.io/metadatamenu/fileclasses/#tagnames-option)

### Map with folder's path

Put your file in a folder that matches one the options defined in [Files paths option](https://mdelobelle.github.io/metadatamenu/fileclasses/#files-paths-option)

For example if "Resources/Music" is defined in [Files paths option](https://mdelobelle.github.io/metadatamenu/fileclasses/#files-paths-option), and if Bob Dylan.md is in `<Your Vault>/Resources/Music/` then it will be mapped with the fileClass `music`

### Map with bookmark groups

Bookmark your file with a bookmark group that matches one the options defined in [Bookmark groups options](https://mdelobelle.github.io/metadatamenu/fileclasses/#bookmark-group-option)

### Map with a query

Set a [Fileclass query](https://mdelobelle.github.io/metadatamenu/settings/#fileclass-queries) in the plugin settings and all files included in this query's result will be mapped with the related fileclass

### Global fileclass mapping

If the file isn't mapped with a fileclass thanks to the previous options, and if there is a [Global Fileclass](https://mdelobelle.github.io/metadatamenu/settings/#global-fileclass) defined, then the file will be mapped with this global fileclass

## FileClass Settings

All fileclass settings are easily configurable in a dedicated view named `Fileclass Setting`. This view is accessible by clicking the button next to the fileclass name (in the file explorer, in the tab header of the fileclass file, next to the internal link to this file etc...).

### `extends` field

a fileClass can extend another fileClass to benefit of it's fields without having to rewrite them.

It may be usefull if you have several fileClass with the same set of fields.

For example you may have a fileClass named `course.md` with some fields like `teacher`, `lecture`, `grade`, `type`.

And you may want to define more specific fields depending on the type of course: a first fileClass `mathematics.md` with a field `chapter` and a second fileClass `physics.md` with a field `lecture`. For the two of them, you want to benefit from the `course` fileClass's fields.

You can do this very easily by using the `extends` field in their frontmatter.

With our example:

`course.md`

`--- fields:   - name: teacher     type: Input     id: ....     path: ....     ...   - name: grade     type: Select     options:        - "0": "A"       - "1": "B"       - "2": "C"     id: ...     path: ....   - name: type     type: Select     options:       - "0": "at school"       - "1": "online"       - "2": "personal teacher at home"     id: ...     path: ....  ---`

`mathematics.md`

`--- extends: course fields:   - name: chapter     type: Select     options:       - "0": Algebra       - "1": Geometry       - "2": Statistics     id: ...     path: ....   - name: to do next     type: File     options:       dvQueryString: "dv.pages('\"Courses\"')"     id: ...     path: .... ---`

`physics.md`

`--- .... extends: course - fields:   - name: lecture     type: Select     options:       - "0": Mecanics       - "1": Optics       - "2": Electricity     id: ...     path: .... ---`

All notes with fileClass `mathematics` or `physics` will benefit from the fields of `course` with the same option, but they will have their own fields in addition to it (`chapter` for `mathematics`, `lecture` for `physics`)

A fileClass can also override a field it has inherited from by defining it again.

for example:

`physics.md`

`--- extends: course - fields:   - name: lecture     type: Select     options:       - "0": Mecanics       - "1": Optics       - "2": Electricity     id: ...     path: ....   - name: type     type: Select     options:       - "0": "at school"       - "1": "online"     id: ...     path: ....  ---`

the `type` field in `physics` will override the one in `course`. notes with `fileClass: physics` will have `at school` and `online` options for `type` but not `personal teacher at home`

### `excludes` option

when defined with an array of values, the field in the array won't be inherited from the parent fileClass

With our previous example:

`physics.md`

`--- extends: course excludes: [grade] ---`

notes with `fileClass: physics` will inherit `teacher` and `type` from `course` fileClass but not `grade`

### `mapWithTag` option

when this is set to `true` all notes including a tag with the same name will benefit from the fields' definitions of this fileclass

This works with nested tags as well

### `tagNames` option

_aliases for your fileClasses_

when not empty (string or array of string), the tags will be mapped with this fileClass

### `Files Paths` option

_map path with your fileClasses_

when not empty (string or array of string), the file with those paths will be mapped with this fileClass

### `Bookmark group` option

_map bookmark with your fileClasses_

when not empty (string or array of string), the files bookmarked with those bookmark groups will be mapped with this fileClass

### `button icon` option

you can customize the icon of the metadata button that gives access to a modal containing all available fields for a note bound with this fileclass

the icon names are available from https://lucide.dev

### `max records per page` attribute

number of rows per page in the [fileclass's table view](https://mdelobelle.github.io/metadatamenu/fileclasses/#table-view).

### `version` attribute

Managed by the system

## Fileclass Fields

In this view, as in the [preset fields](https://mdelobelle.github.io/metadatamenu/settings/#preset-field-settings) settings, you can add, edit and remove [fields definition](https://mdelobelle.github.io/metadatamenu/fields/) for this fileclass: - "list plus" button to add a new field - arrow-up / arrow-down to change the order in which the fields are inserted in a note - "pencil" button to edit a field's definition - "trash" button to remove a field

## Table view

This view shows all files mapped with the fileclass. you can modify the fields directly from the table.

### Filters

Type a value in a field's filter, the table will be filtered to only display notes for which this field contains the filter value.

You can filter by several values with a comma, the table will be filtered to only display notes for which this field contains one of the filter values

For more complex filtering you can type a regex patter such as `/Eco|Science/`. You'll have to escape backslash, for example: `/2023-11-(\\d+) Mon/`.

All columns' field except for the first column (file link) comes with a dropdown selector: - Empty values: will filter to display notes for which the field is in the note, but with no value - Not empty values: will filter to display notes for which the field is in the note, and it has a value - Not found: will filter to display notes for which the field is not in the note - Existing: will filter to display notes for which the field is in the note, whatever the value - field's specific values depending on their type: - Boolean: true, false. (false won't match undefined or empty fields) - Select, Multi-Select: the list of predefined values - File, Multi-File: the list of files matching the predefined query - Lookups: the list of files currently returned by lookup queries

You can also define a custom filtering function in javascript returning a boolean

### Sorters

- "saved view" dropdown select to select a saved view
- "star" button to set or revoke the current view as the favorite view
- "eraser" button to reset the filters and sorting
- "save" button to save the current view
- "trash" button to delete the current view from the saved views
- "collapse filter" button to access more options: sort the table, filter the results, re-arrange columns orders, hide/show columns...

You can define a custom sort by moving up/down the preset values of the field (for File, MultiFile, Select, MultiSelect, Lookup)

### Child classes

You can display child classes in the same view by selecting them from the children selector modal

### Select and Save view

You can save the sorters/filters of the current view, or choose an existing saved view and define a saved view as favorite to show it when the table view is opened

### Rebuild table

When there's a change in a fileclass setting or fileclass field, the table view won't be automatically rebuilt. A "refresh" button will be highlighted: click on it to rebuild the table to take fileclass changes into account

---

# Controls

With Metadata Menu, you have several options to control a field: - [Autocompletion](https://mdelobelle.github.io/metadatamenu/controls/#control-field-with-autocompletion) - [Context Menu and command palette](https://mdelobelle.github.io/metadatamenu/controls/#context-menu-and-command-palette) - Metadata menu button opening the [note's fields modal](https://mdelobelle.github.io/metadatamenu/controls/#open-fields-modal) - [Codeblocks](https://mdelobelle.github.io/metadatamenu/controls/#codeblocks) - [Api](https://mdelobelle.github.io/metadatamenu/api/)

## Control field with autocompletion

In Editor mode, type ":" after a field in frontmatter, or "::" after an inline-field to trigger the autocompletion for `Select`, `Multi`, `File` and `Multi File` fields

## Context Menu and Command palette

Right click in the live preview, on a link, a file in explorer, or opening a file's or plugin's context menu will display options to manage the note's fields

these options are accessible from:

- the local menu in the live preview (right-click in the note)
- the context menu of a link,
- the context menu of a calendar day,
- the context menu of a file in the file explorer,
- the menu of a file
- the command palette "Cmd+P" : Metadata Menu - field options or insert field at cursor or manage field at cursor
- other context menu (not tested)

### Open fields modal

Will open a modal to manage the fields and fileclasses of this note with a compact UI The order of the fields in the modal will be the order of the fields in the file for existing field and the order of the fields defined in the [fileclass fields settings view](https://mdelobelle.github.io/metadatamenu/fileclasses/#fileclass-fields) for missing fields

### Manage Fields

Will open a native Obsidian suggest modal with options available to modify a field or execute the actions mentionned hereafter

### Add a new field at section

1. Right-click on the link
2. Click on "Add field at section"
3. Select the line in the target file where you want to insert the new field
4. Select the field
5. Use the field's modal to manage the value

NB: if the field type is restricted to the frontmatter section, it will be added at the end of the frontmatter whatever the line chosen

### Add a new field at cursor

In live preview, you can add a field at cursor without having to choose the section

### Insert all missing fields

When fileClasses are defined for a note, you can bulk insert all fields defined in those fileClasses that aren't yet included in the note

You can also insert missing fields on a fileClass per fileClass mode : this option is also available in fileClass sub-menu, or next to fileClasses in the Metadata Menu modal (see [Metadata Menu button](https://mdelobelle.github.io/metadatamenu/controls/#metadata-menu-button--metadata-menu-modal))

Missing fields will be inserted at the specified line number or at the end of the frontmatter if no line is specified. The missing fields will be inserted in the order defined in the [fileclass view fields settings](https://mdelobelle.github.io/metadatamenu/fileclasses/#fileclass-fields)

## Control field from dataview tables with dataviewjs

using `fieldModifier` function included in metadata-menu API (see # Api), you can build modifiable fields within dataview table

fieldModifier takes 4 arguments:

- dv: the dataview api
- p : the page your are currently iterating on
- fieldName: the name of the field you want to display (as string)
- attrs (optional): an object with the attributes you want to pass to the field:
    - cls (optional): the class to be applied to the field
    - attr (optional): the dataview attributes for the field (they will be included as data tags in the HTML rendering of the field)
    - options (optional): an object containing specific options for Metadata Menu field modification

### options

#### alwaysOn

with `options: {alwaysOn: true}` the control for the field will always be displayed

with `options: {alwaysOn: false}` (default) the control for the field won't always be displayed, you'll have to click on an intermediate button or hover the field to display the control

#### showAddField

with `options: {showAddField: true}` if the file has no corresponding field, a "+" button will be displayed to select a line in the target file where to add this field

with `options: {showAddField: false}` (default) if the file has no corresponding field, a null value will be displayed

#### inFrontmatter

with `options: {inFrontmatter: true}` the field will automatically be inserted at the end of the frontmatter of the file if exists. If there's no frontmatter (or wrongly formatted frontmatter), a modal will be displayed to select the section where to insert the field

with `options: {inFrontmatter: false}` (default) a modal will be displayed to select the section where to insert the field

### syntax

`/* dataviewjs block */  const {fieldModifier: f} = MetadataMenu.api // destruct metadata-menu api to use fieldModifier function and give an alias: "f"  dv.table(["file", "Masterization", "Tune"],      dv.pages()     .where(p => p.fileClass === "music")     .map(p => [         p.file.link,          f(dv, p, "masterization", {options: {alwaysOn: true}}),  // pass dv (dataview api instance), p (the page), the field name to fieldModifier (: "f") and an object with options: {alwaysOn: true} so taht the control is always visible         f(dv, p, "tune") // pass dv (dataview api instance), p (the page), and the field name to fieldModifier (: "f")         ])     ) )`

Controls will be added to the dataview's table depending on the type of the field.

## Globally update lookup fields

Lookup fields automatically update themselves unless you untoggle their "Auto-update" option

If you want to force-update this lookup field you can use the command palette command `Metadata Menu: Update lookup fields`

## Metadata Menu button & Metadata Menu modal

if one or more fileClass / Supercharged tag is defined for a note, you can display a button next to the note reference everywhere in your vault. When clicking this button, a modal will display all fields defined for those fileClasses and their values.

From there you can - update a field - insert a field - change the setting of the field in its fileClass - see which field corresponds to which fileClass and the opposite - bulk insert missing fields (for all fileClasses, or or one fileClass in particular)

The icon of the button can be customized in the fileClass with the higher priority (see [icon](https://mdelobelle.github.io/fileclasses/#iconfield) )

The visibility of the button can be managed in the plugin [settings](https://mdelobelle.github.io/metadatamenu/settings/#show-extra-button-to-access-metadata-menu-form)

## Codeblocks

You can display a [fileclass table view](https://mdelobelle.github.io/metadatamenu/fileclasses/#table-view) anywhere with a codeblock:

` ```mdm fileClass: <your file class> mandatory view: <your saved view> optional files per page:  <a number> optional start: <a number> optional showAddField: <true of false> optional (false if absent) ``` ` 

## Bulk edit fields

You can edit a field's value in multiple files at once.

From a [fileclass table view](https://mdelobelle.github.io/metadatamenu/fileclasses/#table-view) or a [Codeblock](https://mdelobelle.github.io/metadatamenu/controls/#codeblocks): - click on the first column to display checkboxes to select the files where you want to update the field's values - toggling the checkbox of the header row will toggle all the files' checkboxes in the page (depending on where you are in the pagination of your table) - click on the field name (header cell of the table) of the field that you want to update - update the value in the field's modal - a confirmation modal will be displayed showing you the values that will be modified - click on "confirm" to update the field's value in the selected files

[demo](https://youtu.be/0Xn4pppT7wU)

---

# Api

API is accessible with `MetadataMenu.api`

### getValues (deprecated)

`getValues(fileOrFilePath: TFile | string, attribute: string) => Promise<string[]>`

Takes a TFile containing the field and a string for the related field name Returns an array with the values of the field. If there are several fields with the same name (in object list fields for example, see [Settings](https://mdelobelle.github.io/metadatamenu/api/settings#object-listoptions)), this function will return an array with all the exisiting values

### getValuesForIndexedPath

`getValuesForIndexedPath(fileOrFilePath: TFile | string, indexedPath: string) => Promise<string>`

Takes a TFile containing the field and a string for the related field's [indexedPath](https://mdelobelle.github.io/metadatamenu/api/fields#indexed-path)

Returns the value of the field for this indexedPath

### postValues

creates or updates fields with values in the target note

`postValues(fileOrFilePath: TFile | string, payload: FieldsPayload, lineNumber?: number, after?: boolean, asList?: boolean, asBlockquote?:boolean) => Promise<void>`

#### parameters:

- `fileOrFilePath: TFile | string` : the target file where to create or update the fields
- `payload: FieldsPayload`: list of fields and values to create or update (see type definition below and [indexed path](https://mdelobelle.github.io/metadatamenu/fields/#indexed-path) section of the field settings)
- `lineNumber?: number` : optional line number where to create fields if it doesn't exist. If the field already exists, this attribute won't do anything. If line number is undefined and the field doesn't exist yet, it will be included in frontmatter
- `after?: boolean` : optional parameter to create new fields after or before the line number. Defaults to `true`
- `asList?: boolean`: optional parameter to create new fields as list (insert a `-` before the field's name) . Defaults to `false`
- `asBlockquote?: boolean`: optional parameter to create new fields as comment (insert a `>` before the field's name) . Defaults to `false`

#### `FieldsPayload` and `FieldPayload`

`export type FieldPayload = {     value: string, // the field's value as string }  export type FieldsPayload = Array<{     indexedPath: string, //the indexedPath of the field     payload: FieldPayload }>`

### postNamedFieldsValues

Same as [postValues](https://mdelobelle.github.io/metadatamenu/api/#postvalues) : creates or updates fields with values in the target note. The payload identifies fields based on their names rather than their indexedPath.

`postNamedFieldsValues: (fileOrFilePath: TFile | string, payload: NamedFieldsPayload, lineNumber?: number, asList?: boolean, asBlockquote?: boolean) => Promise<void>;`

#### parameters:

- `fileOrFilePath: TFile | string` : the target file where to create or update the fields
- `payload: NamedFieldsPayload`: list of fields and values to create or update (see type definition below)
- `lineNumber?: number` : optional line number where to create fields if it doesn't exist. If the field already exists, this attribute won't do anything. If line number is undefined and the field doesn't exist yet, it will be included in frontmatter
- `after?: boolean` : optional parameter to create new fields after or before the line number. Defaults to `true`
- `asList?: boolean`: optional parameter to create new fields as list (insert a `-` before the field's name) . Defaults to `false`
- `asBlockquote?: boolean`: optional parameter to create new fields as comment (insert a `>` before the field's name) . Defaults to `false`

#### `NamedFieldsPayload` and `FieldPayload`

`export type FieldPayload = {     value: string, // the field's value as string }  export type NamedFieldsPayload = Array<{     name: string, //the name of the field     payload: FieldPayload }>`

### fieldModifier

`fieldModifier(dv: any, p: any, fieldName: string, attrs?: { cls: string, attr: Record<string, string> }) => HTMLElement`

Takes a dataview api instance, a page, a field name and optional attributes and returns a HTML element to modify the value of the field in the target note

### fileFields

`fileFields(fileOrFilePath: TFile | string) => Promise<Record<string, IFieldInfo>>`

Takes a TFile or e filePath and returns all the fields in the document, both frontmatter and dataview fields, and returns a collection of analysis of those fields by metadatamenu:

`{     (indexedPath: string): {         /* the value of the field in the file */         value: string | undefined,           /* the fileClass name applied to this field if there is a fileClass AND if the field is set in the fileClass or the fileClass it's inheriting from */         fileClassName: string | undefined,          /* true if this fieldName is in "Globally ignored fields" in the plugin settings */         ignoreInMenu: boolean | undefined,          /* true if this field as a setting defined in the plugin settings or a fileClass and if the value is valid according to those settings */         isValid: boolean | undefined,          /* an object containing the options available for this field according to the plugin settings or the fileClass */         options: Record<string, string> | undefined,          /* wether the settings applied to this field come from a fileClass, the plugin settings or none  */         sourceType: "fileClass" | "settings" | undefined,          /* the type of the field according to the plugin settings or the fileClass  */         type: "Input" | "Select" | "Multi" | "Cycle" | "Boolean" | "Number" | "File" | "MultiFile" | "Media" | "MultiMedia" | "Date" | "Lookup" | "Formula" | "Canvas" | "CanvasGroup" | "CanvasGroupLink" | "YAML" | "JSON" | "Object" | "ObjectList"          /* the unique identifier of the field definition in the vault */         id: string          /* the unique idenfier of the path of this field in this file*/         indexedPath: string | undefined     } }`

### namedFileFields

`namedFileFields: (fileOrFilePath: TFile | string) => Promise<Record<string, IFieldInfo>>`

Same as [fileFields](https://mdelobelle.github.io/metadatamenu/api/#filefields) but the key is a "named indexedPath" (each field's ID composing the indexedPath is replaced by its name)

### insertMissingFields

`insertMissingFields: (fileOrFilePath: string | TFile, lineNumber: number, boolean, asList: boolean, asBlockquote: boolean, fileClassName?: string) => Promise<void>`

Takes: - a TFile or its path, - a line number, - asks wether insertion is in after the line (default : false), - asks wether insertion is as list (prepends `-`) (default : false), - asks wether insertion is as comment (prepends `>`) (default : false), - asks wether insertion should only deal with one single fileClass' fields (default: all)

Inserts all missings fields of all (or one specified) fileClass fields at the line, with the format

Made with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)