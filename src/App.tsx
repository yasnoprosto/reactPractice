import React, {useState} from 'react';
import './App.css';
import MoneyComponent from "./MoneyComponent";
export type {BanknoteType, MoneyType}

type BanknoteType = "NOT" | "USD" | "RUB"

type MoneyType = {
    banknotes: string,
    value: number,
    number: string
}

export const App = () => {
    debugger


    const [money, setMoney] = useState([
        {banknotes: 'USD', value: 100, number: ' a1234567890'},
        {banknotes: 'USD', value: 50, number: ' z1234567890'},
        {banknotes: 'RUB', value: 100, number: ' w1234567890'},
        {banknotes: 'USD', value: 100, number: ' e1234567890'},
        {banknotes: 'USD', value: 50, number: ' c1234567890'},
        {banknotes: 'RUB', value: 100, number: ' r1234567890'},
        {banknotes: 'USD', value: 50, number: ' x1234567890'},
        {banknotes: 'RUB', value: 50, number: ' v1234567890'},
    ])

    let currentMoney: any = money;
    const [banknote, setBanknote] = useState<BanknoteType>("NOT");

    if (banknote === "NOT") {
        currentMoney = money
    }
    if (banknote === "USD") {
        currentMoney = money.filter((moneyItem: MoneyType) => moneyItem.banknotes === "USD")
    }
    if (banknote === "RUB") {
        currentMoney = money.filter((moneyItem: MoneyType) => moneyItem.banknotes === "RUB")
    }
    const onClickFilterHandler = (buttonName: string, banknotes: BanknoteType) => {
        setBanknote(banknotes);
    }

    return (
        <MoneyComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    );
}