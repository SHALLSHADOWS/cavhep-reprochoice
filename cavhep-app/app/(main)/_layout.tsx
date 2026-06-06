import { Tabs } from 'expo-router';
import { MessageCircle, BookOpen, Info } from 'lucide-react-native';
import { View } from 'react-native';

function TabIcon({ icon, focused }: { icon: React.ReactNode; focused: boolean }) {
  return (
    <View
      className={`w-10 h-10 items-center justify-center rounded-xl ${
        focused ? 'bg-primary-pale' : ''
      }`}
    >
      {icon}
    </View>
  );
}

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#EEE9DF',
          borderTopWidth: 1,
          height: 68,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarActiveTintColor: '#1E5631',
        tabBarInactiveTintColor: '#8BA88B',
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: 'Inter_500Medium',
          marginTop: -2,
        },
      }}
    >
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat IA',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused} icon={<MessageCircle size={22} color={color} />} />
          ),
        }}
      />
      <Tabs.Screen
        name="methods"
        options={{
          title: 'Méthodes',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused} icon={<BookOpen size={22} color={color} />} />
          ),
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          title: 'FAQ',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused} icon={<Info size={22} color={color} />} />
          ),
        }}
      />
    </Tabs>
  );
}
