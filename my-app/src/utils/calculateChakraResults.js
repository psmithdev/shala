const calculateChakraResults = (responses) => {
  const chakraStrengths = {
    root: 0,
    sacral: 0,
    solar: 0,
    heart: 0,
    throat: 0,
    thirdEye: 0,
    crown: 0,
  };

  responses.forEach((response) => {
    response.answers.forEach((answer) => {
      switch (answer.field.id) {
        case "root_chakra_question_id": // Replace with actual Typeform Field ID
          chakraStrengths.root += answer.number || 0;
          break;
        case "sacral_chakra_question_id":
          chakraStrengths.sacral += answer.number || 0;
          break;
        case "solar_chakra_question_id":
          chakraStrengths.solar += answer.number || 0;
          break;
        case "heart_chakra_question_id":
          chakraStrengths.heart += answer.number || 0;
          break;
        case "throat_chakra_question_id":
          chakraStrengths.throat += answer.number || 0;
          break;
        case "third_eye_chakra_question_id":
          chakraStrengths.thirdEye += answer.number || 0;
          break;
        case "crown_chakra_question_id":
          chakraStrengths.crown += answer.number || 0;
          break;
        default:
          break;
      }
    });
  });

  return chakraStrengths;
};

export default calculateChakraResults;
