import type { InterviewQuestion } from '../data/modules';

export interface TechnicalTerm {
  term: string;
  definition: string;
  category: string;
  importance: 'high' | 'medium' | 'low';
}

export interface Topic {
  title: string;
  description: string;
  content: string;
  code?: string;
  language?: string;
  codeSamples?: {
    code: string;
    language?: string;
    filename?: string;
    label?: string;
  }[];
}

export const reactnativeData = {
  technicalTerms: [
    {
      term: 'Bridge',
      definition: 'The communication layer between JS and native code.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'Metro',
      definition: 'The bundler used by React Native.',
      category: 'Tooling',
      importance: 'medium',
    },
    {
      term: 'JSI',
      definition: 'New architecture for faster native access.',
      category: 'Runtime',
      importance: 'low',
    },
    {
      term: 'Components',
      definition: 'Native-backed UI components like View and Text.',
      category: 'UI',
      importance: 'high',
    },
    {
      term: 'FlatList',
      definition: 'Virtualized list for performant scrolling.',
      category: 'UI',
      importance: 'high',
    },
    {
      term: 'Hermes',
      definition: 'Optimized JavaScript engine for RN.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'Native Modules',
      definition: 'Expose native code to JavaScript.',
      category: 'Interop',
      importance: 'medium',
    },
    {
      term: 'Fabric',
      definition: 'New rendering system replacing the legacy UI manager.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'TurboModules',
      definition: 'Lazy-loaded native modules for faster startup.',
      category: 'Interop',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Layout Basics',
      description: 'Flexbox-based layouts',
      content: `Understand React Native styling and flex layouts for responsive UI.`,
      code: `const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "600" },
});`,
      language: 'typescript',
      codeSamples: [
        {
          label: 'StyleSheet',
          code: `const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "600" },
});`,
          language: 'typescript',
        },
        {
          label: 'Flex Row',
          code: `const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8, alignItems: "center" },
});`,
          language: 'typescript',
        },
      ],
    },
    {
      title: 'Navigation',
      description: 'Stack and tab navigation',
      content: `Use a navigation library to manage screens and deep links.`,
      code: `const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Stack Nav',
          code: `const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`,
          language: 'tsx',
        },
        {
          label: 'Deep Links',
          code: `const linking = {
  prefixes: ["myapp://"],
  config: { screens: { Home: "home" } },
};`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Performance',
      description: 'Smooth animations and lists',
      content: `Use FlatList and memoization to prevent large list slowdowns.`,
      code: `<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Row item={item} />}
/>`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'FlatList',
          code: `<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Row item={item} />}
/>`,
          language: 'tsx',
        },
        {
          label: 'getItemLayout',
          code: `<FlatList
  data={items}
  getItemLayout={(_, index) => ({ length: 48, offset: 48 * index, index })}
/>`,
          language: 'tsx',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'How is styling different from web CSS?',
      answer: `React Native uses a subset of CSS with JS objects.`,
      difficulty: 'easy',
    },
    {
      question: 'What is the bridge?',
      answer: `It is the communication layer between JS and native threads.`,
      difficulty: 'medium',
    },
    {
      question: 'When would you use FlatList?',
      answer: `For large lists to optimize memory and rendering performance.`,
      difficulty: 'easy',
    },
    {
      question: 'How do you optimize startup time in React Native?',
      answer: `Use Hermes, reduce bundle size, lazy load screens, and enable inline requires.`,
      difficulty: 'hard',
    },
    {
      question: 'What tradeoffs come with using native modules?',
      answer: `They add platform-specific code and maintenance complexity but unlock native APIs.`,
      difficulty: 'hard',
    },
    {
      question: 'How does the new architecture improve UI performance?',
      answer: `Fabric and TurboModules reduce bridge overhead and improve scheduling.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
