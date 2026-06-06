import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { CheckCircle2, XCircle, Users, ShieldAlert } from 'lucide-react-native';
import type { ContraceptiveMethod } from '../../data/methods';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { Card } from '../ui/Card';
import { Separator } from '../ui/Separator';

interface MethodDetailProps {
  method: ContraceptiveMethod;
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card className="mb-3">
      <View className="flex-row items-center gap-2 mb-3">
        {icon}
        <Text className="text-base font-bold text-ink">{title}</Text>
      </View>
      {children}
    </Card>
  );
}

export function MethodDetail({ method }: MethodDetailProps) {
  return (
    <ScrollView
      className="flex-1 bg-cream px-4 pt-4"
      showsVerticalScrollIndicator={false}
    >
      <View className="items-center mb-4">
        <View
          style={{ backgroundColor: method.colorPale }}
          className="w-20 h-20 rounded-3xl items-center justify-center mb-3"
        >
          <Text style={{ fontSize: 36 }}>{method.icon}</Text>
        </View>
        <Text className="text-2xl font-bold text-ink text-center">{method.name}</Text>
        <Text className="text-sm text-ink-secondary text-center mt-1 px-4">
          {method.summary}
        </Text>
        <View className="flex-row gap-2 mt-3">
          <Badge label={`${method.effectiveness}% efficace`} variant="primary" />
          <Badge label={method.duration} variant="muted" />
        </View>
      </View>

      <Card className="mb-3">
        <ProgressBar
          value={method.effectiveness}
          label="Taux d'efficacité"
          color={method.color}
        />
      </Card>

      <Section
        title="Comment ça fonctionne"
        icon={<ShieldAlert size={18} color="#1E5631" />}
      >
        <Text className="text-sm text-ink-secondary leading-5">{method.howItWorks}</Text>
      </Section>

      <Section title="Avantages" icon={<CheckCircle2 size={18} color="#27AE60" />}>
        {method.benefits.map((b, i) => (
          <View key={i} className="flex-row items-start gap-2 mb-1.5">
            <CheckCircle2 size={14} color="#27AE60" style={{ marginTop: 2 }} />
            <Text className="text-sm text-ink-secondary flex-1 leading-5">{b}</Text>
          </View>
        ))}
      </Section>

      <Section
        title="Effets secondaires possibles"
        icon={<XCircle size={18} color="#D4621A" />}
      >
        {method.sideEffects.map((s, i) => (
          <View key={i} className="flex-row items-start gap-2 mb-1.5">
            <XCircle size={14} color="#D4621A" style={{ marginTop: 2 }} />
            <Text className="text-sm text-ink-secondary flex-1 leading-5">{s}</Text>
          </View>
        ))}
      </Section>

      <Section title="Qui peut l'utiliser ?" icon={<Users size={18} color="#1E5631" />}>
        <Text className="text-sm text-green-700 leading-5 mb-2">
          ✅ {method.whoCanUse}
        </Text>
        <Separator />
        <Text className="text-sm text-orange-700 leading-5 mt-2">
          ⚠️ {method.whoShouldAvoid}
        </Text>
      </Section>

      <Card className="mb-6 bg-amber-pale border border-amber">
        <Text className="text-xs text-amber font-semibold mb-1">⚕️ Avis médical</Text>
        <Text className="text-xs text-ink-secondary leading-4">
          Cet outil vous informe. Il ne remplace pas une consultation avec un professionnel
          de santé. Pour un choix personnalisé, consultez votre centre de santé local.
        </Text>
      </Card>
    </ScrollView>
  );
}
