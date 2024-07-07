import { NeuralNetResponse as TNeuralNetResponse } from "../api/neuralNetResponse/NeuralNetResponse";

export const NEURALNETRESPONSE_TITLE_FIELD = "id";

export const NeuralNetResponseTitle = (record: TNeuralNetResponse): string => {
  return record.id?.toString() || String(record.id);
};
