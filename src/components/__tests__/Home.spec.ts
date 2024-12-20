import { mount } from '@vue/test-utils';
import Home from '../../components/Home.vue';
import { describe, it, expect } from 'vitest';
import { RouterLinkStub } from '@vue/test-utils';

describe('Home.vue', () => {
  it('renders the welcome message', () => {
    const wrapper = mount(Home);
    
    // Check that the <h1> contains the correct welcome text
    const welcomeMessage = wrapper.find('h1');
    expect(welcomeMessage.text()).toBe('Welcome to My App');
  });

  it('renders a link to the Todo List page', () => {
    const wrapper = mount(Home, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });
    
    // Check that the <router-link> exists
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.exists()).toBe(true);

    // Verify the link destination
    expect(link.props().to).toBe('/todos');

    // Check the link text content
    expect(link.text()).toBe('Todo List');
  });
});
