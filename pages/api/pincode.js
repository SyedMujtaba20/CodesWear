export default function handler(req, res) {
  let pincodes = {
    75500: ["Karachi", "Sindh"],
    54000: ["Lahore", "Punjab"],
    46000: ["Rawalpindi", "Punjab"],
    25000: ["Peshawar", "Khyber Pakhtunkhwa"],
    45320: ["Islamabad", "Islamabad Capital Territory"],
    60000: ["Multan", "Punjab"],
    50250: ["Faisalabad", "Punjab"],
    44000: ["Sialkot", "Punjab"],
    70000: ["Hyderabad", "Sindh"],
    63100: ["Bahawalpur", "Punjab"],
  };

  res.status(200).json(pincodes);
}
