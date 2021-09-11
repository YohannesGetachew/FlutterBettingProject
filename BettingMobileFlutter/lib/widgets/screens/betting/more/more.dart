import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class More extends StatelessWidget {
  Widget build(BuildContext context) {
    return Row(
      children: [
        // marketWithButtons(), marketWithButtons()
      ],
    );
  }

  Widget moreOddButton({name, value}) {
    return ElevatedButton(
        onPressed: () => {},
        style: ElevatedButton.styleFrom(
            primary: Color(0xffDFE8E7), onPrimary: Colors.black),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [Text(name), Text(value)],
        ));
  }

  Widget betButtons() {
    return GridView.count(
        crossAxisCount: 2,
        childAspectRatio: 5 / 1,
        mainAxisSpacing: 3.0,
        crossAxisSpacing: 10.0,
        children:
            List.generate(10, (index) => moreOddButton(name: '1', value: '2')));
  }

  Widget marketWithButtons() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
            color: Color(0xff25323B),
            padding: EdgeInsets.all(10.0),
            child: Text(
              '1X2',
              style: TextStyle(color: Colors.white),
            )),
        Padding(padding: EdgeInsets.all(5.0)),
        Expanded(child: betButtons())
      ],
    );
  }
}
