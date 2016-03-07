(function () {
    "use strict";

    angular.module('app')
        .service('DataCalculationService', ['$http', '$state', DataCalculationService]);

    function calculateReliefTemp(temperature) {
        return temperature + 460;
    }

    function calculateP1V(setPressure, inletLossPressure, allowableOverPressure) {
        return (setPressure - inletLossPressure) + allowableOverPressure + 14.7;
    }

    function calculatePRPrime(P2, P1) {
        const part1 = 11; //Fake
        const part2 = 11; //Fake

        return part1 * (P2 / P1) + part2;
    }

    function calculateKb(C, k, P1, P2) {
        var PRprime = calculatePRPrime(P2, P1);
        console.log("C", C, k, P1, P2, PRprime)

        return (735 / C) * (Math.sqrt((k / (k - 1)) * ((Math.pow(PRprime, (2 / k))) - (Math.pow(PRprime, ((k + 1) / k))))));
    }

    function calculateOrificeSize(inputs) {
        if (inputs.media === "Vapor") {
            return calculateRequiredAreaVolume(inputs);
        } else {
            return calculateRequiredAreaWeight(inputs);
        }
    }

    function calculateRequiredAreaVolume(inputs) {
        const C = inputs.C;
        const K = inputs.K;
        const Kb = inputs.Kb;
        const Kc = inputs.Kc;
        const M = inputs.M;
        const P1 = inputs.P1;
        const T = inputs.T;
        const V = inputs.V;
        const Z = inputs.Z;

        console.log("inputs", inputs);

        return V * (Math.sqrt((M * T * Z))) / (6.32 * C * K * P1 * Kb * Kc);
    }

    function calculateRequiredAreaWeight(inputs) {
        const C = inputs.C;
        const K = inputs.K;
        const Kb = inputs.Kb;
        const Kc = inputs.Kc;
        const M = inputs.M;
        const P1 = inputs.P1;
        const T = inputs.T;
        const W = inputs.W;
        const Z = inputs.Z;

        return W / (C * K * P1 * Kb * Kc) * Math.sqrt(((T * Z) / M));
    }



        function DataCalculationService() {

            this.processDataInputs = function (tagInputData) {

                console.log("what is tagInputData", tagInputData);

                const allowableOverPressure = tagInputData.allowableOverPressure || .1; //Fake
                const backPressureBuiltUp = tagInputData.backPressureBuiltUp || 0;
                const inletLossPressure = tagInputData.inletLoss;
                const k = tagInputData.specificHeat || 1; //Fake
                const Kc = tagInputData.ruptureDisc || 1;
                const M = tagInputData.molecularWeight || 500; //FAKE
                const media = tagInputData.media;
                const setPressure = tagInputData.setPressure;
                const V = tagInputData.requiredFlowCapacity;
                const W = tagInputData.requiredFlowCapacity;
                const Z = tagInputData.compressibility || 1.0;

                const C = 315;
                const K = 0.865;
                const P2 = 500; //Fake
                const temperature = 100;

                const P1 = calculateP1V(setPressure, inletLossPressure, allowableOverPressure);
                const Kb = calculateKb(C, k, P1, P2);
                const T = calculateReliefTemp(temperature);

                const inputs = {media, C, K, Kb, Kc, M, P1, T, V, W, Z};
                const orificeSize = calculateOrificeSize(inputs);

                return orificeSize; //Put this on the page

            };
        }

}());