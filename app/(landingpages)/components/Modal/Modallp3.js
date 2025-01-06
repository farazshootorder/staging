"use client";
import React, { Suspense } from "react";
import LeadFormV2 from "../LeadForm/LeadFormV2";
import LeadFormlp3Meta from "../LeadForm/LeadFormlp3Meta";
import { getNextInternalQuery } from "next/dist/server/request-meta";


const ModalV2 = ({ isOpen, onClose, center, service, isMeta = false, internal }) => {
  if (!isOpen) return null;

  console.log("modal internal", internal);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999999999]">
  
      <div className="md:bg-[#ffe9f3] w-full max-w-lg p-0 md:p-8 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 text-2xl z-50"
          onClick={onClose}
        >
          &times;
        </button>
        <Suspense>
        {isMeta ? <LeadFormlp3Meta center={center} service={service} />: <LeadFormV2 center={center} service={service} internal={internal} /> }
        </Suspense>
      </div>
    </div>
  );
};

export default ModalV2;
