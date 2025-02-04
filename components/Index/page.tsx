'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CompanyChart from '@/components/CompanyChart';
import { fullCompanyList } from '@/data/Companydetails';
import { BackgroundGradient } from '@/components/ui/background-gradient';

export default function Page() {
  const [selectedCompany, setSelectedCompany] = useState<typeof fullCompanyList[0] | null>(null);

  return (
    <div className="bg-gradient-to-br p-5 from-gray-50 to-gray-100">
      <AnimatePresence>
        {!selectedCompany ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=""
          >
            
            <BackgroundGradient className="rounded-[22px] py-4 bg-white dark:bg-zinc-900">

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-7xl mx-auto">
           
              {fullCompanyList.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05 
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCompany(company)}
                  className={`
                  
                    text-white 
                    rounded-xl 
                    shadow-lg 
                    p-4 
                    cursor-pointer 
                    transform 
                    transition-all 
                    hover:shadow-xl
                    flex flex-col items-center
                    text-center
                   
                  `}
                >
                  <div className="mb-3 h-16 w-16 flex items-center justify-center">
                 
                    <Image 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      width={80} 
                      height={80} 
                      className="object-contain"
                    />
             
                  </div>
                  {/* <h2 className="text-sm font-semibold">{company.name}</h2> */}
                  
                </motion.div>
              ))}
                 
            </div>
            </BackgroundGradient>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto p-4"
          >
         
            <div className="bg-white rounded-[2rem] shadow-2xl p-5">
              <div className="flex items-center mb-8">
                <Image 
                  src={selectedCompany.logo} 
                  alt={`${selectedCompany.name} logo`} 
                  width={100} 
                  height={100} 
                  className="mr-6 object-contain"
                />
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">{selectedCompany.name}</h1>
                  <p className="text-gray-600">{selectedCompany.description}</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCompany(null)}
                  className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Back to Overview
                </motion.button>
              </div>

              <CompanyChart data={selectedCompany.data} />
            </div>
        
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
