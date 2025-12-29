import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardBody, CardTitle, CardActions } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-96">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
      <CardBody>
        <CardTitle>Shoes!</CardTitle>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <CardActions>
          <Button variant="primary">Buy Now</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card variant="compact" className="w-96 bg-base-100 shadow-xl">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
      <CardBody>
        <CardTitle>Compact Card</CardTitle>
        <p>Less padding for tighter spaces.</p>
        <CardActions>
          <Button variant="primary" size="sm">Action</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const ImageFull: Story = {
  render: () => (
    <Card variant="image-full" className="w-96">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" /></figure>
      <CardBody>
        <CardTitle>Overlay Title</CardTitle>
        <p>Text sits on top of the image.</p>
        <CardActions>
          <Button variant="primary">Click Me</Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};
