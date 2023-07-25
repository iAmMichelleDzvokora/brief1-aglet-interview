import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent = new ContactsComponent();

  beforeEach(() => {
    component = new ContactsComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
