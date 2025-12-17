module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        {
          type: 'category',
          label: 'Module 1: Introduction',
          items: [
            'modules/module-1-introduction/lesson-1-overview',
            'modules/module-1-introduction/lesson-2-objectives',
            'modules/module-1-introduction/lesson-3-key-concepts'
          ]
        },
        {
          type: 'category',
          label: 'Module 1: ROS 2',
          items: [
            'modules/module-1-ros2/lesson-1-introduction-to-ros2',
            'modules/module-1-ros2/lesson-2-nodes-topics-services',
            'modules/module-1-ros2/lesson-3-bridging-and-urdf'
          ]
        },
        {
          type: 'category',
          label: 'Module 2: Basics',
          items: [
            'modules/module-2-basics/lesson-1-foundations',
            'modules/module-2-basics/lesson-2-practice',
            'modules/module-2-basics/lesson-3-quiz'
          ]
        },
        {
          type: 'category',
          label: 'Module 2: Digital Twin',
          items: [
            'modules/module-2-digital-twin/lesson-1-gazebo-simulation',
            'modules/module-2-digital-twin/lesson-2-sensor-simulation',
            'modules/module-2-digital-twin/lesson-3-unity-integration'
          ]
        },
        {
          type: 'category',
          label: 'Module 3: Advanced',
          items: [
            'modules/module-3-advanced/lesson-1-advanced-topics',
            'modules/module-3-advanced/lesson-2-case-studies',
            'modules/module-3-advanced/lesson-3-summary'
          ]
        },
        {
          type: 'category',
          label: 'Module 3: AI Brain',
          items: [
            'modules/module-3-ai-brain/lesson-1-introduction-to-isaac',
            'modules/module-3-ai-brain/lesson-2-isaac-sim-synthetic-data',
            'modules/module-3-ai-brain/lesson-3-isaac-ros-nav2'
          ]
        },
        {
          type: 'category',
          label: 'Module 4: VLA',
          items: [
            'modules/module-4-vla/lesson-1-introduction-to-vla',
            'modules/module-4-vla/lesson-2-voice-to-action',
            'modules/module-4-vla/lesson-3-cognitive-planning'
          ]
        },
        {
          type: 'category',
          label: 'Module 5: RAG Chatbot',
          items: [
            'modules/module-5-rag-chatbot/lesson-1-introduction',
            'modules/module-5-rag-chatbot/lesson-2-authentication',
            'modules/module-5-rag-chatbot/lesson-3-vector-database',
            'modules/module-5-rag-chatbot/lesson-4-rag-backend',
            'modules/module-5-rag-chatbot/lesson-5-frontend-ui',
            'modules/module-5-rag-chatbot/lesson-6-integration-deployment',
            'modules/module-5-rag-chatbot/lesson-7-physical-ai-assistant'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Tutorial Basics',
      items: [
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/congratulations'
      ]
    },
    {
      type: 'category',
      label: 'Tutorial Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site'
      ]
    }
  ]
};