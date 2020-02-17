using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxCalculator.Business;
using TaxCalculator.Infra;

namespace TaxCalculator
{
    class Program : TaxCalculatorLogic
    {
        
        static void Main(string[] args)
        {
            TaxCalculatorLogic TaxCalculate = new TaxCalculatorLogic();
            double Exemption=0.00;
            double Income=0.00;
            double Investment=0.00;
            double TaxableIncome=0.00;
            double TaxSlab1 = 0.00;
            double TaxSlab2 = 0.00;
            double TaxSlab3 = 0.00;
            double TotalTax = 0.00;
            bool InvalidIncome=true;
            bool InvalidInvestment=true;
            
            Console.Write("Enter your annual Income: ");
            
            //Check for valid Income.
            while(InvalidIncome)
            {
                InvalidIncome=TaxCalculate.CheckIncome();
                if(InvalidIncome==true)
                {
                    Console.WriteLine("Enter valid Income! : ");
                }
            }
            Income = TaxCalculate.GetIncome();

            Console.Write("Enter your Investment under section 80c: ");

            //Check for valid Investment.
            while (InvalidInvestment)
            {
                InvalidInvestment = TaxCalculate.CheckInvestment();
                if (InvalidInvestment == true)
                {
                    Console.Write("Enter valid Investment which must be less than Annual Income! : ");
                }
            }

            Investment=TaxCalculate.GetInvestment();

            Console.WriteLine("\n--------------------------------------------------\n");

            Console.WriteLine("Your Annual income is: " + Income);
            Console.WriteLine("Your Investment is: " + Investment);

            //Calculating Taxable Income
            if(Investment<=150000.00)
            {
                Exemption=Investment;
            }
            else
            {
                Exemption=150000.00;
            }
            TaxableIncome=Income-Exemption;
            Console.WriteLine("Your Taxable income is: " + TaxableIncome);

            if(TaxableIncome<250001.00)
            {
                TotalTax = 0.00;
            }

            //Tax from Tax Rate slab1
            else if(TaxableIncome<500001.00)
            {
                TaxSlab1=TaxCalculate.slab1(TaxableIncome);
            }
            
            //Tax from Tax rate slab2
            else if(TaxableIncome<1000001.00)
            {
                TaxSlab1 = TaxCalculate.slab1(500000.00);
                TaxSlab2 = TaxCalculate.slab2(TaxableIncome);
            }
            
            //Tax from Tax rate slab3
            else
            {
                TaxSlab1 = TaxCalculate.slab1(500000.00);
                TaxSlab2 = TaxCalculate.slab2(1000000.00);
                TaxSlab3 = TaxCalculate.slab3(TaxableIncome);
            }
            TotalTax = TaxSlab1 + TaxSlab2 + TaxSlab3;
            Console.WriteLine("\nTax from Slab1 : " + TaxSlab1);
            Console.WriteLine("Tax from Slab2 : " + TaxSlab2);
            Console.WriteLine("Tax from Slab3 : " + TaxSlab3);
            Console.WriteLine("\nPayable Tax : " + TotalTax);
            Console.ReadKey();
        }
    }
}
