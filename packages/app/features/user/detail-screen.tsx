import { View, Pressable } from 'react-native'
import { useParams, useRouter, useSearchParams } from 'solito/navigation'
import { Avatar, AvatarImage, AvatarFallback } from '../../../../apps/expo/components/ui/avatar'
import { ThemeToggle } from '../../../../apps/expo/components/ThemeToggle'
import { Text } from '../../../../apps/expo/components/ui/text'

const useUserParams = useParams<{ userId: string }>



const GITHUB_AVATAR_URI = 'https://github.com/mrzachnugent.png'

export function UserDetailScreen() {
  const { userId } = useUserParams()
  const router = useRouter()
  const searchParams = useSearchParams()


  return (
    <View className="flex-1 items-center justify-center gap-16 bg-yellow-300 dark:bg-yellow-700">
      <Pressable onPress={() => router.back()}>
        <Text>👈 Hi {userId}, click me to go back. param: {searchParams?.get('search')}</Text>
      </Pressable>

      <Avatar alt="Zach Nugent's Avatar" className="my-4 border-black border-2">
        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
        <AvatarFallback>
          <Text>ZN</Text>
        </AvatarFallback>
      </Avatar>

      <View className="flex-row items-center justify-center gap-1">
        <Text className="font-bold">Theme Toggle:</Text>
        <ThemeToggle />
      </View>
    </View>
  )
}
