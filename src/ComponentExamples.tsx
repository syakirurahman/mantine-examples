import { useState } from "react";
import {
  Alert,
  Select,
  Button,
  Checkbox,
  Modal,
  TextInput,
  Radio,
  Switch,
  Tooltip,
  Textarea,
  Flex,
  Group,
} from "@mantine/core";

const ComponentExamples = () => {
  const initOccupationList = [
    {
      value: "Frontend Engineer",
      label: "Frontend Engineer",
    },
    {
      value: "Backend Engineer",
      label: "Backend Engineer",
    },
    {
      value: "Fullstack Engineer",
      label: "Fullstack Engineer",
    },
    {
      value: "Technical Writer",
      label: "Technical Writer",
    },
    {
      value: "Developer Advocate",
      label: "Developer Advocate",
    },
    {
      value: "UI/UX Designer",
      label: "UI/UX Designer",
    },
    {
      value: "QA Engineer",
      label: "QA Engineer",
    },
  ];
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div style={{ maxWidth: "640px", margin: "1rem auto" }}>
      <h1>Mantine component examples</h1>
      <form>
        <Alert
          title="This is a Mantine info Alert"
          style={{ marginBottom: "1rem" }}
        ></Alert>
        <div style={{ marginBottom: "1rem" }}>
          <TextInput label="Full name" placeholder="Insert your full name" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <TextInput
            label="Email"
            placeholder="Insert your email"
            type="email"
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Radio.Group label="Gender">
            <Group>
              <Radio value="female" label="Female" />
              <Radio value="male" label="Male" />
              <Radio value="other" label="Other" />
            </Group>
          </Radio.Group>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Select
            label="Occupation"
            placeholder="Occupation"
            data={initOccupationList}
            searchable
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <Textarea label="Bio" placeholder="Describe yourself" rows={2} />
        </div>
        <Flex align="center" gap="md">
          <Flex align="center" gap="sm">
            <Switch defaultChecked /> <label>This is switch component</label>
          </Flex>
          <Flex align="center" gap="sm">
            <Checkbox defaultChecked />{" "}
            <label>This is checkbox component</label>
          </Flex>
        </Flex>
        <br />
        <Tooltip label="This is a Mantine tooltip">
          <span>Hover me to show tooltip</span>
        </Tooltip>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button variant="default" type="reset">
            Reset
          </Button>
          <Button onClick={() => setIsDialogOpen(true)}>
            Save (Open Modal)
          </Button>
        </div>
      </form>

      <Modal
        title="Lorem ipsum dolor sit amet"
        opened={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et massa at orci ultrices facilisis. Donec id viverra ante, a mollis
          odio. Morbi nec vulputate urna, sit amet pulvinar tortor.
        </p>
        <Group mt="xl" justify="flex-end">
          <Button variant="default" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsDialogOpen(false)}>Continue</Button>
        </Group>
      </Modal>
    </div>
  );
};

export default ComponentExamples;
