import 'package:flutter/material.dart';

class ApplicationBar extends StatelessWidget implements PreferredSizeWidget {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Image.asset(
        'assets/soccer-ball.png',
        width: 35.0,
      ),
      backgroundColor: Color(0xff1F282F),
      elevation: 6.0,
      actions: [
        IconButton(icon: Icon(Icons.search), onPressed: () => {}),
        IconButton(icon: Icon(Icons.add), onPressed: () => {}),
        IconButton(icon: Icon(Icons.login), onPressed: () => {}),
        IconButton(icon: Icon(Icons.settings), onPressed: () => {}),
      ],
    );
  }

  @override
  Size get preferredSize =>
      new Size.fromHeight(new AppBar().preferredSize.height);
}
