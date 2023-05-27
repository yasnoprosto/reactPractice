import React from 'react';
import {BanknoteType, MoneyType} from "./App";

type MoneyComponentPropsType = {
    currentMoney: MoneyType[],
    onClickFilterHandler:(buttonName: string, banknotes: BanknoteType)=>void
}

const MoneyComponent = (props: MoneyComponentPropsType) => {
    return (
        <div>
            <div className="App">
                <ul>
                    {props.currentMoney.map((element: MoneyType) => {
                        return (
                            <li>
                                {element.banknotes + element.number + element.value}
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => {
                    props.onClickFilterHandler("Not Filtered", "NOT")
                }}>Not Filtered
                </button>
                <button onClick={() => {
                    props.onClickFilterHandler("Filter RUB", "RUB")
                }}>Filter RUB
                </button>
                <button onClick={() => {
                    props.onClickFilterHandler("Filter USD", "USD")
                }}>Filter USD
                </button>
            </div>
        </div>
    );
};

export default MoneyComponent;
