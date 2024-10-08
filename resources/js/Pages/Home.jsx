import ChatLayout from '@/Layouts/ChatLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Home() {
    return (
        <>
            Messages
        </>
    );
}

Home.layout = (page) => {
  return (
    <AuthenticatedLayout
      user={page.props.auth.user}
      children={page}
    >
      <ChatLayout children={page} />
    </AuthenticatedLayout>
  )
}

export default Home
