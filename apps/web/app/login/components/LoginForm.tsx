'use client';

import {
  Button,
  Card,
  Flex,
  Text,
  TextField,
  Heading,
  Link
} from '@radix-ui/themes';

import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export default function LoginForm() {
  const { login, loading, error } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
    await login(email, password);
      window.location.href = '/dashboard';
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <Card size="4" style={{ width: 380 }} className="shadow-xl">
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="5">
            <div className="text-center space-y-1">
              <Heading size="6">Se connecter</Heading>
              <Text size="2" color="gray">
                Connecte-toi à ton workspace
              </Text>
            </div>
            <Flex direction="column" gap="2">
              <Text size="2">Email</Text>
              <TextField.Root
                placeholder="admin@test.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Flex>
            <Flex direction="column" gap="2">
              <Text size="2">Mot de passe</Text>
              <TextField.Root
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Flex>
            <Button size="3" loading={loading}>
              Se connecter
            </Button>
            {error && (
              <Text color="red" size="2" align="center">
                Email ou mot de passe invalide
              </Text>
            )}
            <Text size="2" align="center" color="gray">
              Pas encore de compte ?{' '}
              <Link href="/register">
                S’inscrire
              </Link>
            </Text>
          </Flex>
        </form>
      </Card>
    </Flex>
  )
}
