// src/components/PatientMedicalInfo.tsx
import { Patient } from "@/lib/actions";
import Card from "./card";

interface PatientMedicalInfoProps {
  patient: Patient;
}

export default function PatientMedicalInfo({
  patient,
}: PatientMedicalInfoProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Información Médica
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Financiador
          </label>
          <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
            {patient.financiador}
          </p>
        </div>
        {patient.numero_afiliado && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número de Afiliado
            </label>
            <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
              {patient.numero_afiliado}
            </p>
          </div>
        )}
        {patient.medico_derivante && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Médico Derivante
            </label>
            <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
              {patient.medico_derivante}
            </p>
          </div>
        )}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Motivo de Consulta
          </label>
          <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md">
            {patient.motivo_consulta}
          </p>
        </div>
        {patient.observaciones && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Observaciones
            </label>
            <p className="text-base text-gray-900 bg-gray-50 px-3 py-2 rounded-md whitespace-pre-wrap">
              {patient.observaciones}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
