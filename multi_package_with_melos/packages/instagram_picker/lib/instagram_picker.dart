library login;

import 'package:flutter/material.dart';

class InstagramPickerScreeen extends StatelessWidget {
  const InstagramPickerScreeen({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: Text('Login'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text('Library Instagram Picker '),
              Text('Flutter version 3.13.4')
            ],
          ),
        ),
      ),
    );
  }
}
