import { DatePicker } from '@gravity-ui/date-components';
import { dateTimeParse } from '@gravity-ui/date-utils';
import {
  DFDialog,
  DFDialogField,
  DFDialogProps,
  DFDialogTabField,
  RegisteredDialogField,
  registerDialogControl,
} from '@gravity-ui/dialog-fields';

export function MyControl(props: { value: string; onChange: (value: string, opts?: any) => void }) {
  return (
    <DatePicker
      onUpdate={(data) => {
        props.onChange(data?.toISOString().substring(0, 10)!);
      }}
      defaultValue={dateTimeParse(props.value)}
      size="m"
      format="DD.MM.YYYY"
    />
  );
}

export function FileInput(props: {
  value: React.ChangeEvent<HTMLInputElement>;
  onChange: (value: React.ChangeEvent<HTMLInputElement>, opts?: any) => void;
}) {
  return (
    <input
      type="file"
      onChange={(e) => {
        props.onChange(e);
      }}
    />
  );
}

MyControl.getDefaultValue = () => {
  return null;
};

FileInput.getDefaultValue = () => {
  return null;
};

// step 1
registerDialogControl('mycontrol', MyControl);

registerDialogControl('fileinput', FileInput);

type MyTypedDialogField<ValuesType> = DFDialogField<
  ValuesType,
  | RegisteredDialogField<'mycontrol', React.ComponentProps<typeof MyControl>, ValuesType>
  | RegisteredDialogField<'fileinput', React.ComponentProps<typeof FileInput>, ValuesType>
>;

// step 3
export function MyDialog<ValuesType, InitialValuesType = Partial<ValuesType>>(
  props: DFDialogProps<
    ValuesType,
    InitialValuesType,
    DFDialogTabField<MyTypedDialogField<ValuesType>>,
    MyTypedDialogField<ValuesType>
  >,
) {
  return <DFDialog {...(props as any)} />;
}
