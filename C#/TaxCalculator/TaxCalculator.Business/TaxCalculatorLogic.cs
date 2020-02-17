using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.Infra;

namespace TaxCalculator.Business
{
    public class TaxCalculatorLogic : ITaxCalculatorInterface
    {
        private double AnnualIncome;
        private double AnnualInvestment;
        public bool CheckIncome()
        {
            try
            {
                AnnualIncome = Convert.ToDouble(Console.ReadLine());
            }
            catch
            {
                return true;
            }
            if(AnnualIncome<0)
            {
                return true;
            }
            else
            {
                return false;
            }
            
        }
        public bool CheckInvestment()
        {
            try
            {
                AnnualInvestment = Convert.ToDouble(Console.ReadLine());
            }
            catch
            {
                return true;
            }
            if(AnnualInvestment<0)
            {
                return true;
            }
            else if(AnnualInvestment>=AnnualIncome)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public double GetIncome()
        {
            return AnnualIncome;
        }
        public double GetInvestment()
        {
            return AnnualInvestment;
        }
        public double slab1(double Income)
        {
            return (0.05 * (Income-250000.00));
        }
        public double slab2(double Income)
        {
            return (0.2 * (Income-500000.00));
        }
        public double slab3(double Income)
        {
            return (0.3 * (Income - 1000000.00));
        }
    }
}
