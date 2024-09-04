import { SignIn } from '@clerk/clerk-react';

const customAppearance = {
  elements: {
    rootBox: {
      backgroundColor: '#f4f4f4', 
      borderRadius: '10px', 
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
      padding: '20px',
    },
    card: {
      backgroundColor: '#ffffff', 
      color: '#333333', 
    },
    logo: {
      marginBottom: '20px', 
    },
    socialButtons: {
      button: {
        backgroundColor: '#4285F4', 
        color: '#ffffff', 
        fontFamily: 'Arial, sans-serif', 
        fontWeight: 'bold', 
      },
    },
    formFieldInput: {
      backgroundColor: '#f0f0f0', 
      border: '1px solid #dddddd',
      borderRadius: '4px', 
      padding: '10px', 
      fontFamily: 'Arial, sans-serif', 
    },
    primaryButton: {
      backgroundColor: '#0056b3', 
      color: '#ffffff', 
      fontFamily: 'Arial, sans-serif', 
      fontWeight: 'bold', 
      borderRadius: '4px', 
    },
    footer: {
      textAlign: 'center', 
      color: '#666666', 
      fontFamily: 'Arial, sans-serif',
    },
  },
};

function SignInPage() {
  return <SignIn appearance={customAppearance} />;
}

export default SignInPage;
