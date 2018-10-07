# Checkbox / Radio Button

Customizable button with animations when clicked. Can choose from two button styles, checkbox or radio button.


## Getting Started

Install modules then start local server.
**App.js is only used to demo the button component.**

```
$ yarn
$ yarn start
```

## Props

* **type** - [REQUIRED] determines button styling
```
type={"checkMark"}
OR
type={"radio"}
```

* **onPress** - a function called when button is pressed
* **buttonColor** - (string) sets button's border color for both types, fill color for checkbox type and color for radio button's inner circle

### Checkbox button

* **checkBoxSize** - (string) sets height and width for checkbox button
* **checkMarkColor** - (string) sets color of checkmark
* **checkMarkSize** - (string) sets size of checkmark

### Radio button

* **outerCircleSize** - (string) sets size of button
* **innerCircleSize** - (string) sets size of inner circle

## Example Usage

```
<Button
  type={"checkMark"}
  onPress={handleOnPress}
  buttonColor={"yellow"}
  checkBoxSize={"25px"}
  checkMarkSize={"20px"}
/>
```

## Testing

Run line below to test Button and CheckMarkIcon components

```
$ yarn test
```

## Built Using
* [styled-components](https://github.com/styled-components/styled-components) - Utilizes tagged template literals and CSS for styling components.
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome) - Uses circle icon for radio button
