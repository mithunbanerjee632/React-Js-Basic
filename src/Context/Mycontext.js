import React from "react";

const myContext = React.createContext();

const DadaProvider = myContext.Provider
const PutiConsumer = myContext.Consumer

export {DadaProvider,PutiConsumer}