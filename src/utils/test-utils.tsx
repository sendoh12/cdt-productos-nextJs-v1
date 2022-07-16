import { FC, PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions, RenderResult, waitForElementToBeRemoved, within } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Layout from '../componentes/layout/Layout';
import UserEvent from '@testing-library/user-event';

const AllTheProviders: FC = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Provider store={store}>
      <Layout>
        <SnackbarProvider preventDuplicate>{children}</SnackbarProvider>
      </Layout>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options });

const selectMUISelectOption = async (element: HTMLElement, optionText: string) =>
  new Promise((resolve) => {
    const selectButton = element.parentNode?.querySelector('[role=button]');

    UserEvent.click(selectButton as HTMLElement);

    const listbox = document.body.querySelector('ul[role=listbox]');

    const listItem = within(listbox as HTMLElement).getByText(optionText);
    UserEvent.click(listItem);

    waitForElementToBeRemoved(() => document.body.querySelector('ul[role=listbox]')).then(resolve);
  });

export * from '@testing-library/react';
export { customRender as rende, selectMUISelectOption };
