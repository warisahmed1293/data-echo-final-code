const useHubspotForm = () => {
    const portalId = "144502237";
    const contactFormId = "5dfbae08-b4cf-4a78-8536-138dc0389a23";
  
    const submitContactForm = async (email, full_name, message) => {
      try {
        const formResponse = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${contactFormId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              submittedAt: Date.now(),
              fields: [
                {
                  name: "full_name",
                  value: full_name,
                },
                {
                  name: "email",
                  value: email,
                },
                {
                  name: "message",
                  value: message,
                },
              ],
            }),
          }
        );
  
        const formDataResponse = await formResponse.json();
  
        return formDataResponse.inlineMessage;
      } catch (error) {
        console.error(error);
      }
    };
    return {
      submitContactForm,
    };
  };
  
  export default useHubspotForm;
  