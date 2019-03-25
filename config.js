const params = location.search.slice(1);
export default {
  startYear: 2019,
  secPerMonth: 10,
  schoolTimeSpeedup: 20,
  monthlyExpenses: 1000,
  retirementAge: 65,
  retirementSavingsMin: 500000,
  gameOverBalance: -10000,
  deepeningAutomationAlpha: 0.05,
  maxSkillChangePerWork: 0.01,
  workPerClick: 10,
  slackPerFrame: 1,
  minSlackPerFrame: 0.02,
  startingJobs: [428, 721, 333, 717],
  applicationMinMonths: 1,
  loanTerms: {
    interestRate: 0.058,
    years: 10
  },
  debug: params.includes('debug')
};
