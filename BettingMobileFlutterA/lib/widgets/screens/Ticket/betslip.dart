import 'package:BettingMobileFlutter/widgets/shared/buttons/submitButton.dart';
import 'package:BettingMobileFlutter/widgets/shared/formElements/textField.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class BetSlip extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(padding: EdgeInsets.all(10.0)),
        Text(
          'No match selected',
          style: TextStyle(color: Colors.white),
        ),
        Padding(padding: EdgeInsets.all(10.0)),
        CustomTextField(
          label: 'Amount',
          hintText: 'Enter amount',
        ),
        Padding(padding: EdgeInsets.all(15.0)),
        Column(
          children: [
            Align(
              child: ticketBet(
                participants: 'Arsenal vs Manchester',
                oddType: 'This is an odd type',
                oddValue: '3.65',
              ),
            ),
            Padding(padding: EdgeInsets.all(5.0)),
            Align(
              child: ticketBet(
                participants: 'Arsenal vs Manchester',
                oddType: 'This is an odd type',
                oddValue: '3.65',
              ),
            )
          ],
        ),
        // Padding(padding: EdgeInsets.all(15.0)),
        // ticketDetails(),
        Padding(padding: EdgeInsets.all(15.0)),
        SubmitButton(
          label: 'Save bet',
          isSubmitting: false,
          onSubmit: () => {},
          bgColor: Colors.white,
          textColor: Colors.black,
        ),
        Padding(padding: EdgeInsets.all(5.0)),
        SubmitButton(
          label: 'Place bet',
          isSubmitting: false,
          onSubmit: () => {},
        ),
        Padding(padding: EdgeInsets.all(10.0)),
      ],
    );
  }

  Widget ticketBet({participants, oddType, oddValue}) {
    return Container(
      padding: EdgeInsets.all(10.0),
      decoration: BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(5.0)),
          color: Color(0xffEEB20C)),
      child: Column(
        children: [
          Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [Text(participants), Icon(Icons.delete)]),
          Padding(padding: EdgeInsets.all(4.0)),
          Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [Text(oddType), Text(oddValue)]),
        ],
      ),
    );
  }

  Widget ticketDetails(
      {totalOdds = 1.00,
      totalBets = 0,
      stake = 10,
      stakeAfterVat = 8.70,
      incomeTax = 0,
      possibleWin = 8.70}) {
    return Column(
      children: [
        ticketDetail(name: 'Total odds', value: totalOdds),
        ticketDetail(name: 'Total bets', value: totalBets),
        ticketDetail(name: 'Stake', value: stake),
        ticketDetail(name: 'Stake after tax', value: stakeAfterVat),
        ticketDetail(name: 'Income tax', value: incomeTax),
        ticketDetail(name: 'Possible win', value: possibleWin),
      ],
    );
  }

  Widget ticketDetail({name, value}) {
    return Column(children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            name,
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
          ),
          Text(
            value.toString(),
            style: TextStyle(color: Colors.white),
          ),
        ],
      ),
      Divider(
        color: Colors.white,
        thickness: 1.0,
      ),
    ]);
  }
}
