/* data:
 * initial amount
 * annual contribution
 * expected return
 * duration */

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
};

type InvestmentResult = {
    year: number;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
};

function calculateInvestment(data: InvestmentData): InvestmentResult[] | string {

} // => result[]

// function printResults(results) {}

// const results = calculateInvestment(...);

// printResults(results);