import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  launch: defineAction({
    accept: 'form',
    input: z.object({
      code: z.string().min(1),
    }),
    handler: async (input) => {
      // Simulate backend work
      console.log('Launch code received:', input.code);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (input.code === '1234') {
        return { success: true, message: '🚀 Rocket Launched!' };
      }
      return { success: false, message: '❌ Invalid Launch Code' };
    },
  }),
};
