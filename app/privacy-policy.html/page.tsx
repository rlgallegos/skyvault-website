// This Route is only necessary so the App store has an active link to the privacy policy
// When the app is updated, we can update that metadata to the "terms" route

import { redirect } from 'next/navigation';

const PrivacyPolicy: React.FC = () => {
  redirect('/terms');

  return null; // This component won't render anything
}
export default PrivacyPolicy