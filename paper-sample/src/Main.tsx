import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
  Headline,
  Title,
  Subheading,
  Paragraph,
  Caption,
  Button,
  Card,
  Avatar,
} from 'react-native-paper';

export const Main = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Headline>Paper紹介</Headline>
        <Title>タイトル</Title>
        <Subheading>Typography</Subheading>
        <Paragraph>これが段落です。</Paragraph>
        <Caption>キャプションも書けます。</Caption>
        <Subheading>Button</Subheading>
        <Button>
          ふつうのボタン（mode: text）
        </Button>
        <Button mode="contained">
          contained なボタン
        </Button>
        <Button mode="outlined">
          outlined なボタン
        </Button>
        <Subheading>Card</Subheading>
        <Card>
          <Card.Cover source={require('../assets/favicon.png')} />
          <Card.Title
            title="ラーメン紀行2日目"
            subtitle="炎のラーメンチャンネル"
            left={props => <Avatar.Text {...props} label="YN" />}
          />
          <Card.Content>
            <Paragraph>
              とうとうこの伝説のお店にやってきました。
            </Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: 'flex-end' }}>
            <Button>見ない</Button>
            <Button mode="contained">見る</Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
}
