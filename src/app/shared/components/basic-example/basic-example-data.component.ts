import { Component } from '@angular/core';

@Component({
  selector: 'basic-example-data',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class BasicExampleDataComponent {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    selectMode: 'multi',
    columns: {
      account_name: {
        title: 'Account name',
        filter: false
      },
      type: {
        title: 'Type',
        filter: false
      },
      account_mumber: {
        title: 'Account number',
        filter: false
      },
      ccy: {
        title: 'CCY',
        filter: false
      },
      balance: {
        title: 'Balance',
        filter: false
      },
      last_transfer: {
        title: 'Last transfer',
        filter: false
      },
      account_mumber2: {
        title: 'Account number',
        filter: false
      },
      trustworthiness: {
        title: 'Trusworthiness',
        filter: false
      },
    },
    pager:{
      display: true,
    }
  };

  data = [
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Leanne Graham',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Ervin Howell',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Clementine Bauch',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Patricia Lebsack',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Chelsey Dietrich',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Mrs. Dennis Schulist',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Kurtis Weissnat',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas Runolfsdottir V',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Glenna Reichert',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Clementina DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'WWWWWWWWW @@@@@@',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
    {
      account_name: 'Nicholas Runolfsdottir V',
      type: 'Nicholas DuBuque',
      account_mumber: '53463457568678',
      ccy: 'USD',
      balance: 5654.6,
      last_transfer: '10 Dec 2017',
      account_mumber2: 5234534545,
      trustworthiness: 'Perfect'
    },
  ];
}
