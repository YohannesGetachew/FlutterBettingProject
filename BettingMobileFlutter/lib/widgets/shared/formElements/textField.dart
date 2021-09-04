import 'package:flutter/material.dart';
import 'package:form_field_validator/form_field_validator.dart';

// for all
// bordered text field with label
// placeholder text
// sends filled value to parent form
// validates
// - for name
// 1. an empty value
// 2. if the string has anything except letters
// 3. limits characters
// - for password
// 1. pass length
// - for email
// 1. validate email format

// for password
// eye icon should be visible

enum fieldTypes { NAME, PASSWORD, NUMBER }

class CustomTextField extends StatefulWidget {
  final String hintText;
  final String label;
  final fieldTypes fieldType;

  CustomTextField({this.hintText, this.label, this.fieldType});

  @override
  _CustomTextFieldState createState() => _CustomTextFieldState();
}

class _CustomTextFieldState extends State<CustomTextField> {
  bool dontShowPassword = true;
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      decoration: InputDecoration(
          border: OutlineInputBorder(),
          hintText: '${widget.hintText}',
          labelText: '${widget.label}',
          suffixIcon: widget.fieldType == fieldTypes.PASSWORD
              ? showPasswordIcon(dontShowPassword)
              : null),
      keyboardType: getKeyboardType(widget.fieldType),
      autovalidateMode: AutovalidateMode.onUserInteraction,
      obscureText:
          widget.fieldType == fieldTypes.PASSWORD ? dontShowPassword : false,
      validator: validateFieldValue(),
    );
  }

  TextInputType getKeyboardType(fieldType) {
    if (fieldType == 'NUMBER') {
      return TextInputType.number;
    }
    if (fieldType == 'PASSWORD') {
      return TextInputType.visiblePassword;
    }
    return TextInputType.name;
  }

  IconButton showPasswordIcon(isPasswordVisible) => IconButton(
      icon: isPasswordVisible
          ? Icon(Icons.visibility_off)
          : Icon(Icons.visibility),
      onPressed: () => {setState(() => dontShowPassword = !dontShowPassword)});

  FieldValidator<dynamic> validateFieldValue() {
    String emptyMessage = '${widget.label} is required';
    String getInvalidLengthMessage({minLength = 3}) {
      return '${widget.label} should atleast be $minLength characters';
    }

    switch (widget.fieldType) {
      case fieldTypes.PASSWORD:
        return MultiValidator([
          RequiredValidator(errorText: emptyMessage),
          MinLengthValidator(3, errorText: getInvalidLengthMessage())
        ]);
      case fieldTypes.NUMBER:
        return MultiValidator([
          RequiredValidator(errorText: emptyMessage),
          PatternValidator(
              r'(\+\s*2\s*5\s*1\s*9\s*(([0-9]\s*){8}\s*))|(0\s*9\s*(([0-9]\s*){8}))',
              errorText: 'Please provide a valid ${widget.label}'),
          MinLengthValidator(3, errorText: getInvalidLengthMessage())
        ]);
      case fieldTypes.NAME:
        return MultiValidator([
          RequiredValidator(errorText: emptyMessage),
          MinLengthValidator(3, errorText: getInvalidLengthMessage()),
        ]);
        break;
      default:
        return MultiValidator([
          RequiredValidator(errorText: emptyMessage),
          MinLengthValidator(3, errorText: getInvalidLengthMessage()),
        ]);
    }
  }
}

// g = find all
// i = case insensitive
// x+ = match 1 or more x's
// x? = optionally find x if it exists
// x* = match 0 or more x's
//.   = match anything in the place of the . except a new line
//    e.g.  .x could be hx or rx
// /w =  match any character or a sequence of characters
// /s = match any space or sequence of spaces
