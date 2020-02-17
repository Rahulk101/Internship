using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaxCalculator.Infra
{
    public interface ITaxCalculatorInterface
    {
        bool CheckIncome();
        bool CheckInvestment();
        double GetIncome();
        double GetInvestment();
        double slab1(double TaxableIncome);
        double slab2(double TaxableIncome);
        double slab3(double TaxableIncome);
    }
}
