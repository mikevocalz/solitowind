'use client'

import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti/app'
import { View } from 'react-native'
import { Text } from '../../../../apps/expo/components/ui/text'
import { H1, H4, Span } from '@expo/html-elements'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-16 bg-red-300 dark:bg-red-900 w-full">
      <H1 className="text-center text-black dark:text-white">
        NativeWind/RN-Primitives Starter
      </H1>
      <View className="max-w-2xl w-full">
        <Text className="text-center mb-6 ">
          This is a basic starter to show you how to navigate between screens
          with NativeWind for styling. The same code runs on both Next.js (Web)
          and React Native (Mobile).Built using Solito for universal routing and
          NativeWind for Tailwind-style utility classes across platforms. Solito
          is made by
          <TextLink
            href="https://twitter.com/fernandotherojo"
            target="_blank"
            rel="noreferrer"
          >
            <Text className="font-bold text-blue-900 hover:text-blue-600 ml-1">
              Fernando Rojo
            </Text>
          </TextLink>
          .
        </Text>

        <Text className="text-center mb-6 ">
          <Span className="font-bold text-teal-800">NativeWind</Span> is made by
          <TextLink
            href="https://twitter.com/marklawlor"
            target="_blank"
            rel="noreferrer"
          >
            <Text className="font-bold text-blue-900 hover:text-blue-600 mx-1">
              Mark Lawlor
            </Text>
          </TextLink>
          and maintained by
          <TextLink
            href="https://github.com/danstepanov"
            target="_blank"
            rel="noreferrer"
          >
            <Text className="font-bold text-blue-900 hover:text-blue-600 ml-1">
              Dan Stepanov
            </Text>
          </TextLink>
        </Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 32 }}>
        <TextLink
          href="/users/fernando?search=hey!"
          style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}
        >
          <Text>Regular Link</Text>
        </TextLink>
        <MotiLink
          href="/users/fernando"
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </View>
    </View>
  )
}

